import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselOneComponent } from './carrusel-one.component';

describe('CarruselOneComponent', () => {
  let component: CarruselOneComponent;
  let fixture: ComponentFixture<CarruselOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarruselOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
