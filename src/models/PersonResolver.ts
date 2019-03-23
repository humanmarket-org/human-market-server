import 'reflect-metadata';
import {
  ObjectType, Field, Query, Mutation, Arg, Resolver,
  InputType,
  Authorized, ID
} from 'type-graphql';
import {
  validate, Contains, IsInt, MinLength, IsEmail,
  IsFQDN, IsDate, Min, Max, ArrayMinSize,
  ValidationArguments
} from 'class-validator';
import PersonModel, {Person, PassportIdentity} from './Person';

/**
 * Validations
 */

@InputType()
class AddPerson {
  @Field()
  @MinLength(3)
  name: string;

  @Field(type => [PassportIdentity])
  @ArrayMinSize(1)
  identity: PassportIdentity[];
}

/**
 * Resolver
 */

@Resolver(Person)
export class PersonResolver {
  @Query(returns => Person)
  async person(@Arg('id') id: string) {
    return PersonModel.find({id});
  }

  @Query(returns => [Person])
  async people() {
    return PersonModel.find();
  }

  @Mutation(returns => Person)
  async addPerson(
    @Arg('person') person: AddPerson
  ) {
    const newPerson = new PersonModel(person);
    return newPerson.save();
  }
}
