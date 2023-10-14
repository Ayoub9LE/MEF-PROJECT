import { TestBed } from '@angular/core/testing';

import { ConconrsService } from './conconrs.service';

describe('ConconrsService', () => {
  let service: ConconrsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConconrsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
