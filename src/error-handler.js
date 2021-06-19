const {
  ForbiddenError,
  UserInputError,
  ApolloError,
  AuthenticationError,
} = require('apollo-server-express');

const errorHandler = (e) => {
  switch (e.response.status) {
    case 400:
      throw new UserInputError(e.message);
    case 401:
      throw new AuthenticationError(e.message);
    case 403:
      throw new ForbiddenError(e.message);
    case 404:
      return null;
    default:
      throw new ApolloError(e.message, e.code);
  }
};

module.exports = errorHandler;
