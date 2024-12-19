import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule, ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { BsDatepickerConfig, BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [NgIf, BsDatepickerModule, ReactiveFormsModule],
  template: `
    <div>
      <label *ngIf="label">{{ label }}</label>
      <input
        type="text"
        bsDatepicker
        [bsConfig]="bsConfig"
        [formControl]="control"
        [maxDate]="maxDate"
        class="form-control"
      />
    </div>
  `,
})
export class DatePickerComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() maxDate?: Date;

  bsConfig: Partial<BsDatepickerConfig> = {
    containerClass: 'theme-red',
    dateInputFormat: 'DD MMMM YYYY',
  };

  writeValue(obj: any): void {
}

registerOnChange(fn: any): void {
}

  registerOnTouched(fn: any): void {
  }
  constructor(public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  get control(): FormControl {
    return this.ngControl.control as FormControl;
  }
}
