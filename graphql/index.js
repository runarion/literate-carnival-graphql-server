import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './data/schema.js';
import resolvers from './data/resolvers.js';

const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, GraphQL!');
});

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/graphql`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Please close the other process or use a different port.`);
  } else {
    console.error('Server error:', err);
  }
  process.exit(1);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});