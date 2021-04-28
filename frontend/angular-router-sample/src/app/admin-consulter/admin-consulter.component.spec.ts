import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConsulterComponent } from './admin-consulter.component';

describe('AdminConsulterComponent', () => {
  let component: AdminConsulterComponent;
  let fixture: ComponentFixture<AdminConsulterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConsulterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConsulterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
