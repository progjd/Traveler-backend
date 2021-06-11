import { container } from 'tsyringe';

import IDoctorsRepository from '@modules/doctors/repositories/IDoctorsRepository';
import DoctorsRepository from '@modules/doctors/infra/typeorm/repositories/DoctorRepository';
import ISpecialtiesRepository from '@modules/specialties/repositories/ISpecialtiesRepository';
import SpecialtyRepository from '@modules/specialties/infra/typeorm/repositories/SpecialtyRepository';

container.registerSingleton<IDoctorsRepository>('DoctorsRepository', DoctorsRepository);
container.registerSingleton<ISpecialtiesRepository>('SpecialtyRepository', SpecialtyRepository);
