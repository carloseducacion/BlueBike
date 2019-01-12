import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PHomePage } from './p-home.page';

describe('PHomePage', () => {
  let component: PHomePage;
  let fixture: ComponentFixture<PHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
