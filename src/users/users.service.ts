import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1, 
      username: 'arif',
      password: "not -secure"
    },
    {
      id: 2, 
      username: 'arif',
      password: "not -secure"
    },
    {
      id: 3, 
      username: 'arif',
      password: "not -secure"
    }
  ]
  create(createUserInput: CreateUserInput) {

    const user ={
      ...createUserInput,
      id: this.users.length + 1
    }
    this.users.push(user);
    return 'This action adds a new user';
  }

  findAll() {
    return this.users;
  }

  findOne(username: string) {
    return this.users.find((user)=> user.username===username);
  }

  

 
}
