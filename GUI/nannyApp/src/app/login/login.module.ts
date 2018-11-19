import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IconsModule
  ],
  declarations: [LoginComponent],
  exports: [
    LoginComponent,
  ]
})
export class LoginModule { }
