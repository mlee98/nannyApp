import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateAccountComponent } from './create-account.component';
import { AccountCreateLoginComponent } from './account-create-login/account-create-login.component';
import { AccountCreatePersonalComponent } from './account-create-personal/account-create-personal.component';
import { AccountCreateNannyComponent } from './account-create-nanny/account-create-nanny.component';
import { AccountCreateParentComponent } from './account-create-parent/account-create-parent.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CreateAccountComponent,
    AccountCreateLoginComponent,
    AccountCreatePersonalComponent,
    AccountCreateNannyComponent,
    AccountCreateParentComponent
  ],
  exports: [CreateAccountComponent]
})
export class CreateAccountModule { }
