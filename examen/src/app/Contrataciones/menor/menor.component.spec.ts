import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenorComponent } from './menor.component';

describe('MenorComponent', () => {
  let component: MenorComponent;
  let fixture: ComponentFixture<MenorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
