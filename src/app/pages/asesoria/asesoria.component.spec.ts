import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriaComponent } from './asesoria.component';

describe('AsesoriaComponent', () => {
  let component: AsesoriaComponent;
  let fixture: ComponentFixture<AsesoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsesoriaComponent]
    });
    fixture = TestBed.createComponent(AsesoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
