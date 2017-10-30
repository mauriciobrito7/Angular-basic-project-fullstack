import { TestBed, inject } from '@angular/core/testing';

import { HttpToolsService } from './http-tools.service';

describe('HttpToolsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpToolsService]
    });
  });

  it('should be created', inject([HttpToolsService], (service: HttpToolsService) => {
    expect(service).toBeTruthy();
  }));
});
