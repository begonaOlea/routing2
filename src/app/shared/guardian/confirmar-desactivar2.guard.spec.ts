import { TestBed } from '@angular/core/testing';

import { ConfirmarDesactivar2Guard } from './confirmar-desactivar2.guard';

describe('ConfirmarDesactivar2Guard', () => {
  let guard: ConfirmarDesactivar2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConfirmarDesactivar2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
