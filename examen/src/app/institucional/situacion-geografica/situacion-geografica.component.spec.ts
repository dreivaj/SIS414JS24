import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacionGeograficaComponent } from './situacion-geografica.component';

describe('SituacionGeograficaComponent', () => {
  let component: SituacionGeograficaComponent;
  let fixture: ComponentFixture<SituacionGeograficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SituacionGeograficaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SituacionGeograficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
