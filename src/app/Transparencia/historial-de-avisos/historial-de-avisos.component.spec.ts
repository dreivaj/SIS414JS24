import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialDeAvisosComponent } from './historial-de-avisos.component';

describe('HistorialDeAvisosComponent', () => {
  let component: HistorialDeAvisosComponent;
  let fixture: ComponentFixture<HistorialDeAvisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialDeAvisosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistorialDeAvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
