export declare class AppService {
    products: {
        id: number;
        name: string;
        description: string;
        price: string;
    }[];
    getProducts(): Promise<{
        id: number;
        name: string;
        description: string;
        price: string;
    }[]>;
}
