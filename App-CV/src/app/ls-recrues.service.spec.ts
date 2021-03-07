import { TestBed } from '@angular/core/testing';

import { LsRecruesService } from './ls-recrues.service';

describe('LsRecruesService', () => {
  let service: LsRecruesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LsRecruesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
