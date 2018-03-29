import { TestBed, inject } from '@angular/core/testing';

import { TutoriaService } from './tutoria.service';

describe('TutoriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TutoriaService]
    });
  });

  it('should be created', inject([TutoriaService], (service: TutoriaService) => {
    expect(service).toBeTruthy();
  }));
});
