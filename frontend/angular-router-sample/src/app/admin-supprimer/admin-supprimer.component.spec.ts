import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSupprimerComponent } from './admin-supprimer.component';

describe('AdminSupprimerComponent', () => {
  let component: AdminSupprimerComponent;
  let fixture: ComponentFixture<AdminSupprimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSupprimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSupprimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
