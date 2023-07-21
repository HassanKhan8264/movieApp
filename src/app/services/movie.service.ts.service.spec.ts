import { TestBed } from '@angular/core/testing';

import { MovieServiceTsService } from './movie.service.ts.service';

describe('MovieServiceTsService', () => {
  let service: MovieServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
