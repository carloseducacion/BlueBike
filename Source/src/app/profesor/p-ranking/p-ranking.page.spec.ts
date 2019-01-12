import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PRankingPage } from './p-ranking.page';

describe('PRankingPage', () => {
  let component: PRankingPage;
  let fixture: ComponentFixture<PRankingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PRankingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PRankingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
