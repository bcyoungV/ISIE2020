import { TestBed } from '@angular/core/testing';

import { LsPersonnesServiceService } from './ls-personnes-service.service';

describe('LsPersonnesServiceService', () => {
  let service: LsPersonnesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LsPersonnesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
