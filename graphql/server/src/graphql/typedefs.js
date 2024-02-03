const typeDefs = `#graphql
type User{
    _id: String,
    name: String,
    email: String
}

scalar Date

type Query {
    users:[User]!
    test: Int
}

type Mutation {
  createUser(name:String,email:String):User
    testMutation(data: Data): Int
    signup(data: UserInput): AuthPayload
    login(email: String!, password: String!): AuthPayload!
    addPerson(data: AddUserInput!): User
    delPerson(id: ID!): [User]
}

type AuthPayload {
  token: String
  user: User
}

input Data {
  msg: String
  num: Int
}

input EmailDataInput {
  email: String
  password: String
}

input CreditCardDataInput {
  cardNumber: String
  expires: Date
  cvc: Int!
}

input AddressDataInput {
  firstName: String!
  lastName: String!
  address: String!
  city: String!
  country: String!
  state: String!
  zip: Int # Change from Float to Int or String
}

input UserInput {
  emailData: EmailDataInput!
  creditCardData: CreditCardDataInput!
  addressData: AddressDataInput!
}

input AddUserInput {
    name: String!
    email: String
    password: String!
}

`;

module.exports = typeDefs;
