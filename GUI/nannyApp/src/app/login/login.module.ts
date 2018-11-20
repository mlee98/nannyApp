import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IconsModule
  ],
  declarations: [LoginComponent],
  exports: [
    LoginComponent,
  ]
})
export class LoginModule { }
