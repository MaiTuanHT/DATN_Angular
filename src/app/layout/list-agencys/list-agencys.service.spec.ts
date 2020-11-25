import { TestBed } from '@angular/core/testing';

import { ListAgencysService } from './list-agencys.service';

describe('ListAgencysService', () => {
  let service: ListAgencysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAgencysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
