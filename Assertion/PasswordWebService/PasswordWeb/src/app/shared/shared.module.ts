import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import {ReactiveFormsModule,FormsModule}  from '@angular/forms'
import { FlexLayoutModule } from "@angular/flex-layout";
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports:[NavbarComponent]
})
export class SharedModule { }