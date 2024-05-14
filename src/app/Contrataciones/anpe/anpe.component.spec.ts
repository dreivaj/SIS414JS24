import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnpeComponent } from './anpe.component';

describe('AnpeComponent', () => {
  let component: AnpeComponent;
  let fixture: ComponentFixture<AnpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnpeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
