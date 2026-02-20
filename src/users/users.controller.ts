import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
    constructor(private usersService: UsersService){}
    @Post('/signup')
    createUser(@Body() createUserDto:CreateUserDto){
        return this.usersService.create(createUserDto.email, createUserDto.password);
    }
}
