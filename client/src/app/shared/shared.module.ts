import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  InputFieldComponent,
  PreloaderComponent,
  FormFieldErrorComponent
} from './components';

const sharedComponents: any = [
  InputFieldComponent,
  PreloaderComponent,
  FormFieldErrorComponent
];

const MaterialModules: any = [
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...MaterialModules
  ],
  declarations: [...sharedComponents],
  exports: [
    ...sharedComponents,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...MaterialModules
  ]
})
export class SharedModule { }
