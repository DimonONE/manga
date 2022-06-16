/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { UpdateUserDto } from './dto/update-user-dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    getAllUsers(): Promise<User[]>;
    getFiend(email: string): Promise<(User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(user: CreateUserDto): Promise<User>;
    updateUser(id: string, data: UpdateUserDto): Promise<User>;
    remove(id: string): Promise<User>;
}
