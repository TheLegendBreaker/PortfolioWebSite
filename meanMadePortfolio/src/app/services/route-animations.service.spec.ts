import { TestBed } from '@angular/core/testing';

import { RouteAnimationsService } from './route-animations.service';

describe('RouteAnimationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteAnimationsService = TestBed.get(RouteAnimationsService);
    expect(service).toBeTruthy();
  });
});
