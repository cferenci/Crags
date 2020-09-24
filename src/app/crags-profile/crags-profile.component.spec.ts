import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CragsProfileComponent } from './crags-profile.component';

describe('CragsProfileComponent', () => {
  let component: CragsProfileComponent;
  let fixture: ComponentFixture<CragsProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CragsProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CragsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
