import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionslistComponent } from './inscriptionslist.component';

describe('InscriptionslistComponent', () => {
  let component: InscriptionslistComponent;
  let fixture: ComponentFixture<InscriptionslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscriptionslistComponent]
    });
    fixture = TestBed.createComponent(InscriptionslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
