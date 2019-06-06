import { TestBed, inject } from '@angular/core/testing';

import { AgenService } from './agen.service';

describe('AgenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgenService]
    });
  });

  it('should be created', inject([AgenService], (service: AgenService) => {
    expect(service).toBeTruthy();
  }));
});
