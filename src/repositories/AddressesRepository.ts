import { EntityRepository, Repository } from 'typeorm';
import Addresses from '../models/addresses';

@EntityRepository(Addresses)
class AddressesRepository extends Repository<Addresses> {}
export default AddressesRepository;
