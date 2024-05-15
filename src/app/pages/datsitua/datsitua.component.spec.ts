import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatsituaComponent } from './datsitua.component';

describe('DatsituaComponent', () => {
  let component: DatsituaComponent;
  let fixture: ComponentFixture<DatsituaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatsituaComponent]
    });
    fixture = TestBed.createComponent(DatsituaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
