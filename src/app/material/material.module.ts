import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatDialogModule,
  MatTooltipModule
} from '@angular/material';


const components = [
  MatButtonModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatDialogModule,
  MatTooltipModule
];

@NgModule({
  imports: components,
  exports: components
})
export class MaterialModule { }
