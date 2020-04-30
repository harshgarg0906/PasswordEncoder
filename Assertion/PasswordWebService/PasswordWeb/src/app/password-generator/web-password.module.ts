import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebPasswordRoutingModule } from './web-password-routing.module';
import { GeneratepasswordComponent } from './generatepassword/generatepassword.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import {ReactiveFormsModule,FormsModule}  from '@angular/forms';
import { AllcompanyComponent } from './allcompany/allcompany.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component'

@NgModule({
  declarations: [
      GeneratepasswordComponent,
      AllcompanyComponent,
      UpdatepasswordComponent
  ],
  imports: [
    CommonModule,
    WebPasswordRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class WebPasswordModule { }