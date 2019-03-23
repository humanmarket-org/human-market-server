import express from 'express';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import schemaPromise from './schema';

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || '4242';
const DATABASE_HOST = process.env.DATABASE_HOST || 'mongodb://localhost/human-market';

const app = express();

mongoose
  .connect(
    DATABASE_HOST,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

schemaPromise.then((schema) => {
  app.use(
    '/',
    cors(),
    bodyParser.json(),
    expressGraphQL({
      schema,
      graphiql: true,
      pretty: NODE_ENV === 'development',
      formatError: (err) => {
        console.log(err);
        return err.message;
      }
    })
  );

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
