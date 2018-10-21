import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateAccountComponent } from './create-account.component';
import { UserPassComponent } from './user-pass/user-pass.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CreateAccountComponent,
    UserPassComponent,
    PersonalInfoComponent
  ],
  exports: [CreateAccountComponent]
})
export class CreateAccountModule { }
