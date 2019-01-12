import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorPage } from './profesor.page';

describe('ProfesorPage', () => {
  let component: ProfesorPage;
  let fixture: ComponentFixture<ProfesorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
