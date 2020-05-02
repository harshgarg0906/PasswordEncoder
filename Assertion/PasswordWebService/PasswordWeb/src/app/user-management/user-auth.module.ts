import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from '../shared/material.module';
import {ReactiveFormsModule,FormsModule}  from '@angular/forms'
import { FlexLayoutModule } from "@angular/flex-layout";
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule
  ],
  exports:[LoginComponent]
})
export class UserAuthModule { }
