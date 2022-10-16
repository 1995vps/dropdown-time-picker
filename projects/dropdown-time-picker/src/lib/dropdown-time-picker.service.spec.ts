import { TestBed } from '@angular/core/testing';

import { DropdownTimePickerService } from './dropdown-time-picker.service';

describe('DropdownTimePickerService', () => {
  let service: DropdownTimePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropdownTimePickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
