/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getUsers(): Promise<User[]>;
    getUser(email: string): Promise<(User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    createUser(createUser: CreateUserDto): Promise<User | {
        message: any;
    }>;
    update(updateProducts: UpdateUserDto, id: string): Promise<User>;
    remove(id: string): Promise<User>;
}
