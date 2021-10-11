import { Entity } from '@loopback/repository';
export declare class Products extends Entity {
    name: string;
    price: number;
    description?: string;
    id?: string;
    constructor(data?: Partial<Products>);
}
export interface ProductsRelations {
}
export declare type ProductsWithRelations = Products & ProductsRelations;
