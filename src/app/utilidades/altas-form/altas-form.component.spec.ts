import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltasFormComponent } from './altas-form.component';

describe('AltasFormComponent', () => {
  let component: AltasFormComponent;
  let fixture: ComponentFixture<AltasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltasFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
