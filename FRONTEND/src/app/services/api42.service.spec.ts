import { TestBed } from '@angular/core/testing';

import { Api42Service } from './api42.service';

describe('Api42Service', () => {
  let service: Api42Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Api42Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
