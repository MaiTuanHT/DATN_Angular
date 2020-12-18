import { TestBed } from '@angular/core/testing';

import { ListScheduleOfRouteService } from './list-schedule-of-route.service';

describe('ListScheduleOfRouteService', () => {
  let service: ListScheduleOfRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListScheduleOfRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
