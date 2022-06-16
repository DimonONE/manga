import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getProducts(): Promise<{
        id: number;
        name: string;
        description: string;
        price: string;
    }[]>;
}
