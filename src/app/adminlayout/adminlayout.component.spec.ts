import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlayoutComponent } from './adminlayout.component';

describe('AdminLayoutComponent', () => {
  let component: AdminlayoutComponent;
  let fixture: ComponentFixture<AdminlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
