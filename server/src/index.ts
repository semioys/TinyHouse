import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./graphql";
import { connectDatabase } from "./database";

const { PORT } = process.env;
const app = express();

const mount = async (app: Application) => {
  const db = await connectDatabase();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => {
      db;
    },
  });
  server.applyMiddleware({ app, path: "/api" });
  app.listen(PORT);
  console.log(`[app]: http://localhost:${PORT}`);
  const listings = await db.listings.find({}).toArray();
  console.log(listings);
};

mount(app);
