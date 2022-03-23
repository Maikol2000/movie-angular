import { TestBed } from '@angular/core/testing';

import { RegisterDetailService } from './register-detail.service';

describe('RegisterDetailService', () => {
  let service: RegisterDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
