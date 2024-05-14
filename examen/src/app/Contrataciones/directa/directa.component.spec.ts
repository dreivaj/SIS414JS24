import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectaComponent } from './directa.component';

describe('DirectaComponent', () => {
  let component: DirectaComponent;
  let fixture: ComponentFixture<DirectaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
