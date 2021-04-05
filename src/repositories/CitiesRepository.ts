import { EntityRepository, Repository } from 'typeorm';
import Cities from '../models/cities';

@EntityRepository(Cities)
class CitiesRepository extends Repository<Cities> {}
export default CitiesRepository;
