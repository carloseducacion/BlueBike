import { TestBed } from '@angular/core/testing';

import { BackbuttonService } from './backbutton.service';

describe('BackbuttonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackbuttonService = TestBed.get(BackbuttonService);
    expect(service).toBeTruthy();
  });
});
