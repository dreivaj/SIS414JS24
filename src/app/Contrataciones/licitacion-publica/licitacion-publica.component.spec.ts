import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicitacionPublicaComponent } from './licitacion-publica.component';

describe('LicitacionPublicaComponent', () => {
  let component: LicitacionPublicaComponent;
  let fixture: ComponentFixture<LicitacionPublicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicitacionPublicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LicitacionPublicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
