import { Component, OnInit, Input } from '@angular/core';
import { ErrorMatcher } from '../../../helpers/error-state-matcher';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  @Input()placeholder: string;
  @Input()control: any;
  @Input()type = 'text';
  errorMatcher = new ErrorMatcher();

  constructor() { }

  ngOnInit() {
  }
}
