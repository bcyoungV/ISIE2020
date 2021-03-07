import { TestBed } from '@angular/core/testing';

import { LsPersonnesService } from './ls-personnes.service';

describe('LsPersonnesService', () => {
  let service: LsPersonnesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LsPersonnesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
