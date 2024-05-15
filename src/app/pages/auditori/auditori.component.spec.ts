import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriComponent } from './auditori.component';

describe('AuditoriComponent', () => {
  let component: AuditoriComponent;
  let fixture: ComponentFixture<AuditoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditoriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
