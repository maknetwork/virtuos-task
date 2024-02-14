import { Injectable, ExecutionContext } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { GqlExecutionContext } from '@nestjs/graphql'

@Injectable()
export class GqlAuthGuard extends AuthGuard('local') {
    constructor(){
        super();
    }
  getRequest(context: ExecutionContext): any {
    const ctx = GqlExecutionContext.create(context)
    const request =  ctx.getContext().req;
    request.body = ctx.getArgs().loginUserInput;
    return request;
  }
}