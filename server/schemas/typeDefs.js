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
    menuitem: Menuitem
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
    _id: ID
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
    orders: [Order]
    categories: [Category]
    menuItems(category: ID, name: String): [Menuitem]
    menuitem(_id: ID!): Menuitem
    allFood: [Menuitem]
    me: User
    user: User
    order(_id: ID!): Order
    checkout(menuitems: [MenuitemInput]): Checkout
    users: [User]
  }

  type Mutation {
    addCategory(category: CategoryInput): Category
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, mobile: String!): Auth
    addOrder(menuitem: MenuitemInput! comment: String): Order
    addMenuitem(Menuitem: MenuitemInput!): Menuitem
    updateUser(mobile: String): User
    login(email: String!, password: String!): Auth
    updateOrder(completed: Boolean): Order
    removeMenuitem(menuitems: [ID]!): Order
    deleteOrder(_id: ID!): User
    deleteUser(_id: ID!): User
  }
`;

module.exports = typeDefs;