import { buildSchema } from 'type-graphql';
import { PersonResolver } from './models/PersonResolver';

export default buildSchema({
  resolvers: [PersonResolver],
});
