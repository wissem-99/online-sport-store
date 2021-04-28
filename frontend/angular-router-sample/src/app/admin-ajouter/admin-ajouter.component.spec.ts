import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAjouterComponent } from './admin-ajouter.component';

describe('AdminAjouterComponent', () => {
  let component: AdminAjouterComponent;
  let fixture: ComponentFixture<AdminAjouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAjouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
