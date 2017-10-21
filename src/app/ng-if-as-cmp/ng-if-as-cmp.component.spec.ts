import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfAsCmpComponent } from './ng-if-as-cmp.component';

describe('NgIfAsCmpComponent', () => {
  let component: NgIfAsCmpComponent;
  let fixture: ComponentFixture<NgIfAsCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfAsCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfAsCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
