import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCragComponent } from './add-crag.component';

describe('AddCragComponent', () => {
  let component: AddCragComponent;
  let fixture: ComponentFixture<AddCragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCragComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
