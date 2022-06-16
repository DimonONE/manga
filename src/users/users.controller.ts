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
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
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

  @Get(':email')
  getUser(@Param('email') email: string) {
    return this.userService.getFiend(email);
  }

  @Post()
  async createUser(
    @Body() createUser: CreateUserDto,
  ): Promise<User | { message }> {
    const { email } = createUser;
    const isNewUser = await this.userService.getFiend(email);
    console.log('isNewUser', isNewUser);

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
