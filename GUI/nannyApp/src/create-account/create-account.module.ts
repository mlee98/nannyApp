import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account.component';
import { UserPassComponent } from './user-pass/user-pass.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CreateAccountComponent,
    UserPassComponent
  ],
  exports: [CreateAccountComponent]
})
export class CreateAccountModule { }
