import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantelejeComponent } from './planteleje.component';

describe('PlantelejeComponent', () => {
  let component: PlantelejeComponent;
  let fixture: ComponentFixture<PlantelejeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantelejeComponent]
    });
    fixture = TestBed.createComponent(PlantelejeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
