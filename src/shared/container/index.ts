import { container } from 'tsyringe';

import IDoctorRepository from '@modules/doctors/repositories/IDoctorRepository';
import DoctorRepository from '@modules/doctors/infra/typeorm/repositories/DoctorRepository';
import ISpecialtiesRepository from '@modules/specialties/repositories/ISpecialtiesRepository';
import SpecialtyRepository from '@modules/specialties/infra/typeorm/repositories/SpecialtyRepository';

container.registerSingleton<IDoctorRepository>('DoctorRepository', DoctorRepository);
container.registerSingleton<ISpecialtiesRepository>('SpecialtyRepository', SpecialtyRepository);
