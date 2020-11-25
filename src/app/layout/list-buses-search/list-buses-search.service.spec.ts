import { TestBed } from '@angular/core/testing';

import { ListBusesSearchService } from './list-buses-search.service';

describe('ListBusesSearchService', () => {
  let service: ListBusesSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListBusesSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
