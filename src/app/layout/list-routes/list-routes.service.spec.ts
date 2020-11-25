import { TestBed } from '@angular/core/testing';

import { ListRoutesService } from './list-routes.service';

describe('ListRoutesService', () => {
  let service: ListRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
