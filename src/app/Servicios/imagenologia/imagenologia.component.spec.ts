import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenologiaComponent } from './imagenologia.component';

describe('ImagenologiaComponent', () => {
  let component: ImagenologiaComponent;
  let fixture: ComponentFixture<ImagenologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenologiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagenologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
