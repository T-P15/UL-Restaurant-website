const typeDefs = `
  type Category {
    _id: ID
    name: String
  }

  type Menuitem {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    orderItems: [Orderitem]
    completed: Boolean
  }

  type Addons {
    _id: ID
    none: Boolean
    spicy: Boolean
    vegan: Boolean
    vegetarian: Boolean
    glutenfree: Boolean
    comment: String
  }

  type Admin {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
    completedOrders: [Order]
  }

  type Orderitem {
    _id: ID
    menuItem: Menuitem
    protein: Protein
    addOns: Addons
  }

  type Protein {
    title: String
    price: Float
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
    name: String
    description: String
    image: String
    price: Float
    category: Category
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ProductInput]): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;