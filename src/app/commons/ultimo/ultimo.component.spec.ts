import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimoComponent } from './ultimo.component';

describe('UltimoComponent', () => {
  let component: UltimoComponent;
  let fixture: ComponentFixture<UltimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
