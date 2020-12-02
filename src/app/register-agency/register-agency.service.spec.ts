import { TestBed } from '@angular/core/testing';

import { RegisterAgencyService } from './register-agency.service';

describe('RegisterAgencyService', () => {
  let service: RegisterAgencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterAgencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
