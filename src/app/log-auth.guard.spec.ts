import { TestBed, async, inject } from '@angular/core/testing';

import { LogAuthGuard } from './log-auth.guard';

describe('LogAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogAuthGuard]
    });
  });

  it('should ...', inject([LogAuthGuard], (guard: LogAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
