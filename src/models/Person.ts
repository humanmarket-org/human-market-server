import 'reflect-metadata';
import {
  ObjectType, Field, Query, Mutation, Arg, Resolver,
  InputType,
  Authorized, ID
} from 'type-graphql';
import {
  validate, Contains, IsInt, MinLength, IsEmail,
  IsFQDN, IsDate, Min, Max
} from 'class-validator';
import mongoose, { Schema } from 'mongoose';

/**
 * Mongoose Interface
 */
export interface IPerson extends mongoose.Document {
  id: string;
  name: string;
  identity: IPassportIdentity[];
}

export interface IPassportIdentity extends mongoose.Document {
  strategy: string;
  token: string;
  email: string;
  name: string;
}

/**
 * Mongoose Model
 */

const PersonSchema = new Schema<IPerson>({
  id: {
    type: Schema.Types.ObjectId,
    index: true,
    unique: true,
    required: true,
    auto: true
  },
  name: String,
  identity: [{
    strategy: String,
    token: String,
    email: String,
    name: String
  }]
});

// PersonSchema.methods['name2'] = () => this.name + '2222';

export default mongoose.model<IPerson>('Person', PersonSchema);

/**
 * GraphQL Interface
 */
@ObjectType()
export class Person {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field(type => [PassportIdentity])
  identity: PassportIdentity[];
}

@ObjectType()
@InputType('PassportIdentityInput')
export class PassportIdentity {
  @Field()
  strategy: string;
  @Field()
  token: string;
  @Field()
  email: string;
  @Field()
  name: string;
}
