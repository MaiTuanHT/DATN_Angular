import { TestBed } from '@angular/core/testing';

import { ListBusesService } from './list-buses.service';

describe('ListBusesService', () => {
  let service: ListBusesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListBusesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
