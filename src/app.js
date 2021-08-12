const express = require("express");
const connectDB = require("./mongo");

const authRoute = require("./routes/auth");
const graphqlRoute = require('./routes/graphql')

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB()
  .then(() => {
    console.log("DB connected");
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((e) => console.log(e));

// routes
app.use(authRoute);
app.use(graphqlRoute)
