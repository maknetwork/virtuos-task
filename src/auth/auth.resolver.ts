import { Mutation, Resolver, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login-response';
import { LoginUserInput } from './dto/login-user.input';
import { GqlAuthGuard} from './gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';

@Resolver()
export class AuthResolver {

    constructor(private authService: AuthService){}


@Mutation(()=> LoginResponse)
@UseGuards(GqlAuthGuard)
login(@Args('loginUserInput') loginUserInput: LoginUserInput){
    return this.authService.login(loginUserInput);
}


@Mutation(()=> User)
signup(@Args('loginUserInput') loginUserInput: LoginUserInput){
    return this.authService.signup(loginUserInput);

}


}
