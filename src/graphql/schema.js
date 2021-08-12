const graphql = require("graphql");
const User = require("../models/User");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
  GraphQLSchema,
} = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

const handlerErrors = (e) => {};

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        try {
          const { email, password } = args;
          const user = await User.create({ email, password });
          return user;
        } catch (e) {
          throw new Error(e);
        }
      },
    },
  },
});

const RootTypeQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
      },
      resolve: async (parent, args) => {
        const user = await User.findById(args.id);
        return user;
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootTypeQuery,
  mutation: Mutation,
});

module.exports = schema;
