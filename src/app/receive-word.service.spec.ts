import { TestBed } from '@angular/core/testing';

import { ReceiveWordService } from './receive-word.service';

describe('ReceiveWordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceiveWordService = TestBed.get(ReceiveWordService);
    expect(service).toBeTruthy();
  });
});
