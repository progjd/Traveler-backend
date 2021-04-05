import { EntityRepository, Repository } from 'typeorm';
import Places from '../models/places';

@EntityRepository(Places)
class CitiesRepository extends Repository<Places> {}
export default CitiesRepository;
