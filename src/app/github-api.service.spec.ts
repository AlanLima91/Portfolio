import { TestBed } from '@angular/core/testing';

import { GithubApiService } from './github-api.service';
import { HttpClientModule } from '@angular/common/http';

describe('GithubApiService', () => {
  let service: GithubApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(GithubApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
