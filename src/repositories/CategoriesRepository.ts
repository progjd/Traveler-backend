import { EntityRepository, Repository } from 'typeorm';
import Categories from '../models/categories';

@EntityRepository(Categories)
class CategoriesRepository extends Repository<Categories> {}
export default CategoriesRepository;
