import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCragsComponent } from './popular-crags.component';

describe('PopularCragsComponent', () => {
  let component: PopularCragsComponent;
  let fixture: ComponentFixture<PopularCragsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularCragsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularCragsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
