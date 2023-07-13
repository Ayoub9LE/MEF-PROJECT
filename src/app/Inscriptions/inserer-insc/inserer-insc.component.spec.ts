import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsererInscComponent } from './inserer-insc.component';

describe('InsererInscComponent', () => {
  let component: InsererInscComponent;
  let fixture: ComponentFixture<InsererInscComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsererInscComponent]
    });
    fixture = TestBed.createComponent(InsererInscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
