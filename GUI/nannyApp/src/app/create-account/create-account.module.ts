import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateAccountComponent } from './create-account.component';
import { AccountCreateLoginComponent } from './account-create-login/account-create-login.component';
import { AccountCreatePersonalComponent } from './account-create-personal/account-create-personal.component';
import { AccountCreateNannyComponent } from './account-create-nanny/account-create-nanny.component';
import { AccountCreateParentComponent } from './account-create-parent/account-create-parent.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IconsModule,
    SharedModule
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
