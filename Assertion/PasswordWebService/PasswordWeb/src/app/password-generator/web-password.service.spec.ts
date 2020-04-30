import { TestBed } from '@angular/core/testing';

import { WebPasswordService } from './web-password.service';

describe('WebPasswordService', () => {
  let service: WebPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
