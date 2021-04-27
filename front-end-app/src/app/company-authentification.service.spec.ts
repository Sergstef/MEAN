import { TestBed } from '@angular/core/testing';

import { CompanyAuthentificationService } from './company-authentification.service';

describe('CompanyAuthentificationService', () => {
  let service: CompanyAuthentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyAuthentificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
