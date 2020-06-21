import express from "express";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./graphql";

const app = express();
const { PORT } = process.env;

const server = new ApolloServer({ schema });

server.applyMiddleware({ app, path: "/api" });

app.listen(PORT);

console.log(`[app]: http://localhost:${PORT}`);
