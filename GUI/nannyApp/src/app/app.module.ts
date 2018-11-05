import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsPageModule } from './settings-page/settings-page.module';
import { CreateAccountModule } from './create-account/create-account.module';
import { NannyJobsModule } from './nanny-jobs/nanny-jobs.module';
import { NannyProfilePageModule } from './nanny-profile-page/nanny-profile-page.module';
import { LoginModule } from './login/login.module';
import { SearchModule } from './search/search.module';
import { ParentJobsModule } from './parent-jobs/parent-jobs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SettingsPageModule,
    CreateAccountModule,
    NannyJobsModule,
    NannyProfilePageModule,
    LoginModule,
    SearchModule,
    ParentJobsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
