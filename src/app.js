const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const connectDB = require("./mongo");
const { typeDefs, resolvers } = require("./graphql");

const authRoute = require("./routes/auth");

(async function startServer() {
  try {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();

    const app = express();
    server.applyMiddleware({ app });

    // middlewares
    app.use(express.static("./client/build"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    await connectDB();
    console.log("DB connected");

    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });

    app.get("/", (req, res) => {
      res.sendFile("/index.html");
    });

    // routes
    app.use(authRoute);
  } catch (e) {
    console.log(e);
  }
})();
