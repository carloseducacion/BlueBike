import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UHomePage } from './u-home.page';

describe('UHomePage', () => {
  let component: UHomePage;
  let fixture: ComponentFixture<UHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
