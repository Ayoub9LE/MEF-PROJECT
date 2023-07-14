import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptrefuseinscComponent } from './acceptrefuseinsc.component';

describe('AcceptrefuseinscComponent', () => {
  let component: AcceptrefuseinscComponent;
  let fixture: ComponentFixture<AcceptrefuseinscComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceptrefuseinscComponent]
    });
    fixture = TestBed.createComponent(AcceptrefuseinscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
