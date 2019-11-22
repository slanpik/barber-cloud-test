import { TestBed } from '@angular/core/testing';

import { InfoServicesService } from './info-services.service';

describe('InfoServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoServicesService = TestBed.get(InfoServicesService);
    expect(service).toBeTruthy();
  });
});
