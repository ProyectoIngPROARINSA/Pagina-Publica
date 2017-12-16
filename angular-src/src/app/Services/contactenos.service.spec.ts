import { TestBed, inject } from '@angular/core/testing';

import { contactenosService } from './contactenos.service';

describe('contactenosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [contactenosService]
    });
  });

  it('should be created', inject([contactenosService], (service: contactenosService) => {
    expect(service).toBeTruthy();
  }));
});
