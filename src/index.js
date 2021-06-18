const { ApolloServer } = require('apollo-server-express');
const { DateResolver } = require('graphql-scalars');

const app = require('./app');
const resolvers = require('./schema/resolvers');
const typeDefs = require('./schema/typedefs');
const spotifyAPI = require('./api/spotify-api');

const PORT = 3000;

const startApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers: [...resolvers, { Date: DateResolver }],
    context: ({ req, res }) => ({
      authorization: req.headers.authorization,
      spotifyAPI,
    }),
    introspection: true,
    playground: true,
  });

  await server.start();

  server.applyMiddleware({
    app,
    path: '/api/graphql',
  });

  app.listen({ port: PORT });

  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`,
  );
  console.log(
    `🚀 Playground ready at http://localhost:${PORT}${server.graphqlPath}/playground`,
  );
};

startApolloServer();
