import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrusel3Component } from './carrusel3.component';

describe('Carrusel3Component', () => {
  let component: Carrusel3Component;
  let fixture: ComponentFixture<Carrusel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carrusel3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Carrusel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
