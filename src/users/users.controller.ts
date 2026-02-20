import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/user.dto';

@Controller('auth')
export class UsersController {
    @Post('/signup')
    createUser(@Body() createUserDto:CreateUserDto){
        console.log(createUserDto);

    }
}
