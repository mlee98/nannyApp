import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsPageModule } from '../settings-page/settings-page.module';
import { CreateAccountModule } from '../create-account/create-account.module';
import { MyJobsModule } from '../my-jobs/my-jobs.module';
import { NannyProfilePageModule } from 'src/nanny-profile-page/nanny-profile-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SettingsPageModule,
    CreateAccountModule,
    MyJobsModule,
    NannyProfilePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
