import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternacionClinicaQuirurgicaComponent } from './internacion-clinica-quirurgica.component';

describe('InternacionClinicaQuirurgicaComponent', () => {
  let component: InternacionClinicaQuirurgicaComponent;
  let fixture: ComponentFixture<InternacionClinicaQuirurgicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternacionClinicaQuirurgicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternacionClinicaQuirurgicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
