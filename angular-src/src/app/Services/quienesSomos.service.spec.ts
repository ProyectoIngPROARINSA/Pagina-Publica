import { TestBed, inject } from '@angular/core/testing';

import { quienesSomosService } from './quienesSomos.service';

describe('quienesSomosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [quienesSomosService]
    });
  });

  it('should be created', inject([quienesSomosService], (service: quienesSomosService) => {
    expect(service).toBeTruthy();
  }));
});
