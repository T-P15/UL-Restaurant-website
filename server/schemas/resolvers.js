const { User, Menuitem, Category, Order, Admin} = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        categories: async () => {
            const categories = await Category.find();
            return categories
            
          },
          menuItems: async (parent, { category, name }) => {
            const params = {};
      
            if (category) {
              params.category = category;
            }
      
            if (name) {
              params.name = {
                $regex: name
              };
            }
      
            return await Menuitem.find(params).populate('category');
          },
          menuitem: async (parent, { _id }) => {
            return await Menuitem.findById(_id).populate('category');
          },
          user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'orders.menuitems',
                populate: 'category'
              });
      
              user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
      
              return user;
            }
      
            throw AuthenticationError;
          },
          order: async (parent, { _id }, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'orders.menuitems',
                populate: 'category'
              });
      
              return user.orders.id(_id);
            }
      
            throw AuthenticationError;
          },
          checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;
            await Order.create({ menuitems: args.menuitems.map(({ _id }) => _id) });
            // eslint-disable-next-line camelcase
            const line_items = [];
      
            // eslint-disable-next-line no-restricted-syntax
            for (const menuitem of args.menuitems) {
              line_items.push({
                price_data: {
                  currency: 'usd',
                  menuitem_data: {
                    name: menuitem.name,
                    description: menuitem.description,
                    protein: menuitem.protein,
                    addons: menuitem.addOns,
                    
                  },
                  unit_amount: menuitem.totalprice * 100,
                },
                quantity: 1,
              });
            }
      
            const session = await stripe.checkout.sessions.create({
              payment_method_types: ['card'],
              line_items,
              mode: 'payment',
              success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
              cancel_url: `${url}/`,
            });
      
            return { session: session.id };
          },
    },
    Mutation: {
        addCategory: async (parent, args) => {
          const category = await Category.create(args);
          return category
        },

        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
          },
          addOrder: async (parent, { menuitems }, context) => {
            if (context.user) {
              const order = new Order({ menuitems });
      
              await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
      
              return order;
            }
      
            throw AuthenticationError;
          },
          updateUser: async (parent, args, context) => {
            if (context.user) {
              return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
      
            throw AuthenticationError;
          },
          login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw AuthenticationError;
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw AuthenticationError;
            }
      
            const token = signToken(user);
      
            return { token, user };
          }
        }
      };

      module.exports = resolvers