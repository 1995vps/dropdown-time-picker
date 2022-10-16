import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownTimePickerComponent } from './dropdown-time-picker.component';

describe('DropdownTimePickerComponent', () => {
  let component: DropdownTimePickerComponent;
  let fixture: ComponentFixture<DropdownTimePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownTimePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
