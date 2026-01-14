import { Test, TestingModule } from '@nestjs/testing';
import { UsersDepartmentsController } from './users-departments.controller';
import { UsersDepartmentsService } from './users-departments.service';

describe('UsersDepartmentsController', () => {
  let controller: UsersDepartmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersDepartmentsController],
      providers: [UsersDepartmentsService],
    }).compile();

    controller = module.get<UsersDepartmentsController>(UsersDepartmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
