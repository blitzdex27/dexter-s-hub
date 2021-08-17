const User = require("../models/User");

const resolvers = {
  Query: {
    getUsers() {
      return User.find({});
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      try {
        const { email, password } = args;
        const user = await User.create({ email, password });
        return user;
      } catch (e) {
        throw new Error(e)
      }
    },
  },
};

module.exports = resolvers;
