import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'form-field-error',
  templateUrl: './form-field-error.component.html',
  styleUrls: ['./form-field-error.component.css']
})
export class FormFieldErrorComponent implements OnInit, OnChanges {
  @Input() error;
  message = '';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(newProps) {
    if (newProps && newProps.error && newProps.error.currentValue) {
      if (newProps.error.currentValue.required) {
        this.message = `Required field`;
        return;
      }
      if (newProps.error.currentValue.minlength) {
        this.message = `Field min length: ${newProps.error.currentValue.minlength.requiredLength}`;
        return;
      }
      if (newProps.error.currentValue.maxlength) {
        this.message = `Field max length: ${newProps.error.currentValue.maxlength.requiredLength}`;
        return;
      }
      if (newProps.error.currentValue.authSymbols) {
        this.message = `Available symbols: latin range, digits, @, ., _, -`;
        return;
      }
    } else {
      this.message = '';
    }
  }
}
