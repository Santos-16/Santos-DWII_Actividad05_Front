import { TestBed } from '@angular/core/testing';

import { IsponibilidadService } from './isponibilidad.service';

describe('IsponibilidadService', () => {
  let service: IsponibilidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsponibilidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
