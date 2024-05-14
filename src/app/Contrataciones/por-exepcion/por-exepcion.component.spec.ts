import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorExepcionComponent } from './por-exepcion.component';

describe('PorExepcionComponent', () => {
  let component: PorExepcionComponent;
  let fixture: ComponentFixture<PorExepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorExepcionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PorExepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
