import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemmeComponent } from './femme.component';

describe('FemmeComponent', () => {
  let component: FemmeComponent;
  let fixture: ComponentFixture<FemmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FemmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FemmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

