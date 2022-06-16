import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { UpdateUserDto } from './dto/update-user-dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getFiend(email: string) {
    return this.userModel.find({ email });
  }

  async create(user: CreateUserDto): Promise<User> {
    const createUser = new this.userModel(user);
    return createUser.save();
  }

  async updateUser(id: string, data: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, data);
  }

  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndRemove(id);
  }
}
