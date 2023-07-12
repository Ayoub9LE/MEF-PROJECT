import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListconcoursComponent } from './listconcours.component';

describe('ListconcoursComponent', () => {
  let component: ListconcoursComponent;
  let fixture: ComponentFixture<ListconcoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListconcoursComponent]
    });
    fixture = TestBed.createComponent(ListconcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
