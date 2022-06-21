import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto, LoginUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Post(':login')
  async getUser(@Body() createUser: LoginUserDto): Promise<{ status } | { message } > {
    const { email, password } = createUser
    const isLogin = await this.userService.getFiend(email);
    if (isLogin.length) {
      if (isLogin[0].password === password) {
        return { status: "Success" };
      } else {
        return { message: "Пароль не вірний!"}
      }
    } else {
      return { message: "Такого користувача не існує!"}
    }
  }

  @Post('create')
  async createUser(
    @Body() createUser: CreateUserDto,
  ): Promise<User | { message }> {
    const { email } = createUser;
    const isNewUser = await this.userService.getFiend(email);

    if (!isNewUser.length) {
      return this.userService.create(createUser);
    }
    return { message: 'Користувач уже існує!' };
  }

  @Put(':id')
  update(@Body() updateProducts: UpdateUserDto, @Param('id') id: string) {
    return this.userService.updateUser(id, updateProducts);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
