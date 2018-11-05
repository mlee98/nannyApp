import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsPageModule } from './settings-page/settings-page.module';
import { CreateAccountModule } from './create-account/create-account.module';
import { NannyJobsModule } from './nanny-jobs/nanny-jobs.module';
import { NannyProfilePageModule } from './nanny-profile-page/nanny-profile-page.module';
import { LoginModule } from './login/login.module';
import { SearchModule } from './search/search.module';
import { ParentJobsModule } from './parent-jobs/parent-jobs.module';
import { HeaderComponent } from './header/header.component';
import { HomePageModule } from './home-page/home-page.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
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
    ParentJobsModule,
    RouterModule,
    HomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
