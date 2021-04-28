import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoiresComponent } from './accesoires.component';

describe('AccesoiresComponent', () => {
  let component: AccesoiresComponent;
  let fixture: ComponentFixture<AccesoiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoiresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
