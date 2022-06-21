import { CreateUserDto, LoginUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getUsers(): Promise<User[]>;
    getUser(createUser: LoginUserDto): Promise<{
        status: any;
    } | {
        message: any;
    }>;
    createUser(createUser: CreateUserDto): Promise<User | {
        message: any;
    }>;
    update(updateProducts: UpdateUserDto, id: string): Promise<User>;
    remove(id: string): Promise<User>;
}
