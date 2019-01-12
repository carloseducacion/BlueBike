import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { URankingPage } from './u-ranking.page';

describe('URankingPage', () => {
  let component: URankingPage;
  let fixture: ComponentFixture<URankingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ URankingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(URankingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
