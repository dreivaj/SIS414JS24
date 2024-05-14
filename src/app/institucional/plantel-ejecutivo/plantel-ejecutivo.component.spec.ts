import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantelEjecutivoComponent } from './plantel-ejecutivo.component';

describe('PlantelEjecutivoComponent', () => {
  let component: PlantelEjecutivoComponent;
  let fixture: ComponentFixture<PlantelEjecutivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantelEjecutivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantelEjecutivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
