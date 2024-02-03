const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./graphql/typedefs");
const resolvers = require("./graphql/resolvers");
// Specifying path to .env
dotenv.config({ path: "../.env" });
const port = process.env.PORT || 8080;
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB
console.log("@Ya mongo URI ha", mongoURI);
async function connect() {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB Atlas!");
  } catch (error) {
    console.log("Ya error aya", error);
  }
}
// connect();

const bootstrapServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const { url } = await startStandaloneServer(server);
  console.log(`🚀 Server ready at ${url}`);
};

bootstrapServer();
