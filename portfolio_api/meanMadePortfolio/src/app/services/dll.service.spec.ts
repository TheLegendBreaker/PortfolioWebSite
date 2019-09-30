import { TestBed } from '@angular/core/testing';

import { DllService } from './dll.service';

describe('DllService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DllService = TestBed.get(DllService);
    expect(service).toBeTruthy();
  });
});
