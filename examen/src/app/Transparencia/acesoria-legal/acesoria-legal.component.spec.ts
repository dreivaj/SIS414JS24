import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcesoriaLegalComponent } from './acesoria-legal.component';

describe('AcesoriaLegalComponent', () => {
  let component: AcesoriaLegalComponent;
  let fixture: ComponentFixture<AcesoriaLegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcesoriaLegalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcesoriaLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
