import { TestBed } from '@angular/core/testing';

import { PlanetsApiService } from './planets-api.service';

describe('PlanetsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanetsApiService = TestBed.get(PlanetsApiService);
    expect(service).toBeTruthy();
  });
});
