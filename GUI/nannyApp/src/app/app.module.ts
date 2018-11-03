import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsPageModule } from './settings-page/settings-page.module';
import { CreateAccountModule } from './create-account/create-account.module';
import { MyJobsModule } from './my-jobs/my-jobs.module';
import { NannyProfilePageModule } from './nanny-profile-page/nanny-profile-page.module';
import { LoginModule } from './login/login.module';
import { SearchModule } from './search/search.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SettingsPageModule,
    CreateAccountModule,
    MyJobsModule,
    NannyProfilePageModule,
    LoginModule,
    SearchModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
