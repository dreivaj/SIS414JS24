import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeograficaComponent } from './geografica.component';

describe('GeograficaComponent', () => {
  let component: GeograficaComponent;
  let fixture: ComponentFixture<GeograficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeograficaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeograficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
