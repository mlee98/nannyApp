import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { SearchComponent } from './search/search.component';
import { NannyProfilePageComponent } from './nanny-profile-page/nanny-profile-page.component';
import { MyJobsComponent } from './my-jobs/my-jobs.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'create-account', component: CreateAccountComponent},
  {path: 'settings', component: SettingsPageComponent},
  {path: 'nanny-profile/:id', component: NannyProfilePageComponent},
  {path: 'jobs', component: MyJobsComponent},
  {path: 'search', component: SearchComponent},
  {path: '', component: HomePageComponent}, // default URL (check if logged in?)
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '404', pathMatch: 'full'}, // unknown path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
