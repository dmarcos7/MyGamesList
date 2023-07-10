import { TestBed } from '@angular/core/testing';

import { JuegosusuarioService } from './juegosusuario.service';

describe('JuegosusuarioService', () => {
  let service: JuegosusuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuegosusuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
