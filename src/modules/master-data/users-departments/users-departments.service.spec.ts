import { Test, TestingModule } from '@nestjs/testing';
import { UsersDepartmentsService } from './users-departments.service';

describe('UsersDepartmentsService', () => {
  let service: UsersDepartmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersDepartmentsService],
    }).compile();

    service = module.get<UsersDepartmentsService>(UsersDepartmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
