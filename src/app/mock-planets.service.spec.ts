import { TestBed } from '@angular/core/testing';

import { MockPlanetsService } from './mock-planets.service';

describe('MockPlanetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockPlanetsService = TestBed.get(MockPlanetsService);
    expect(service).toBeTruthy();
  });
});
