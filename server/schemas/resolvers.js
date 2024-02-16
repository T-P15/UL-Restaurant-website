const { User, Menuitem, Category, Order, Admin} = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        categories: async () => {
            const categories = await Category.find();
            return categories
            
          },

          orders: async () => {
            const orders = await Order.find().populate('menuitem');
            console.log(orders)
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


          allFood: async () => {
            const food = await Menuitem.find();
            return food 
          },

          users: async () => {
            const users = await users.find().populate('order').populate("menuitem");
            return users
          },


          menuitem: async (parent, { _id }) => {
            return await Menuitem.findById(_id).populate('category');
          },


          user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'orders',
                populate: {
                  path: 'menuitems',
                  populate: {
                    path: 'category',
                  },
                },
              });
      
              return user;
            }
      
            throw AuthenticationError;
          },

          me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id }).populate({
                path: 'orders',
                populate: {
                  path: 'menuitem',
                  populate: {
                    path: 'category',
                  },
                },
              });
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


     //     addOrder: async (parent, args, context) => {
         //   if (context.user) {
              
         //     const order = await Order.create(args);
      
        //      await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
      
       //       return order;
       //     }
      
      //      throw AuthenticationError;
      //    },

          addOrder: async (parent,  {menuitem} , context) => {
            console.log('Received menuitem:', menuitem);
            if (context.user) {
              try {
                // Create the order and associate menu items
                const order = await Order.create({
                  menuitem: menuitem});
      
                // Update the user with the new order
                
      
                // Populate the order with menu items before returning
                const populatedOrder = await Order.populate(order, { path: 'menuitem',
              populate: {
                path: 'category',
              }, });

                await User.findByIdAndUpdate(context.user._id, { $push: { orders: populatedOrder } })
                console.log('Order created:', populatedOrder);
                return populatedOrder;
              } catch (error) {
                console.error(error);
                throw new Error('Error creating order.');
              }
            }
      
            throw new AuthenticationError('You must be logged in to place an order.');
          },
        
      

          updateUser: async (parent, {mobile}, context) => {
            if (context.user) {
              return await User.findByIdAndUpdate(context.user._id, { $set: { mobile } }, { new: true });
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