import { TestBed } from '@angular/core/testing';

import { ProjectsDllService } from './projects-dll.service';

describe('ProjectsDllService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectsDllService = TestBed.get(ProjectsDllService);
    expect(service).toBeTruthy();
  });
});
