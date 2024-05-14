import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OEmergenciasComponent } from './oemergencias.component';

describe('OEmergenciasComponent', () => {
  let component: OEmergenciasComponent;
  let fixture: ComponentFixture<OEmergenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OEmergenciasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OEmergenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
