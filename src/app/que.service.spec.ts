import { TestBed, inject } from '@angular/core/testing';

import { QueService } from './que.service';

describe('BookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueService]
    });
  });

  it('should be created', inject([QueService], (service: QueService) => {
    expect(service).toBeTruthy();
  }));
});
