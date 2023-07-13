import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyconcoursComponent } from './modifyconcours.component';

describe('ModifyconcoursComponent', () => {
  let component: ModifyconcoursComponent;
  let fixture: ComponentFixture<ModifyconcoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyconcoursComponent]
    });
    fixture = TestBed.createComponent(ModifyconcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
