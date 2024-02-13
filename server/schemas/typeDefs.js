const typeDefs = `
  type Category {
    _id: ID
    name: String
  }

  type Menuitem {
    _id: ID
    code: String
    name: String
    description: String
    image: String
    price: Float
    category: Category
    protein: String
    addOns: String
    totalprice: Float
  }

  type Order {
    _id: ID
    purchaseDate: String
    menuItems: [Menuitem]
    comment: String
    completed: Boolean
  }


  type Admin {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
    completedOrders: [Order]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    mobile: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  input MenuitemInput {
    code: String
    name: String
    description: String
    image: String
    price: Float
    category: CategoryInput
    protein: String
    addOns: String
    totalprice: Float
  }

  input CategoryInput {
    _id: ID
    name: String
  }

  type Query {
    categories: [Category]
    menuItems(category: ID, name: String): [Menuitem]
    menuitem(_id: ID!): Menuitem
    allFood: [Menuitem]
    user: User
    order(_id: ID!): Order
    checkout(menuitems: [MenuitemInput]): Checkout
  }

  type Mutation {
    addCategory(category: CategoryInput): Category
    addUser(firstName: String!, lastName: String, email: String, password: String, mobile: String!): Auth
    addOrder(menuitems: [ID]! comment: String): Order
    addMenuitem(Menuitem: MenuitemInput!): Menuitem
    updateUser(firstName: String, lastName: String, email: String, password: String, mobile: String): User
    login(email: String!, password: String!): Auth
    updateOrder(completed: Boolean): Order
    removeMenuitem(menuitems: [ID]!): Order
  }
`;

module.exports = typeDefs;