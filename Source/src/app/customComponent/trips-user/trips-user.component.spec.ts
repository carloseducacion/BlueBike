import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsUserComponent } from './trips-user.component';

describe('TripsUserComponent', () => {
  let component: TripsUserComponent;
  let fixture: ComponentFixture<TripsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
