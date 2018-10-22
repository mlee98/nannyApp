import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateAccountComponent } from './create-account.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CreateAccountComponent
  ],
  exports: [CreateAccountComponent]
})
export class CreateAccountModule { }
