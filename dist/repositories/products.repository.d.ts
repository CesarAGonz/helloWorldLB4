import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Products, ProductsRelations } from '../models';
export declare class ProductsRepository extends DefaultCrudRepository<Products, typeof Products.prototype.id, ProductsRelations> {
    constructor(dataSource: MongoDataSource);
}
