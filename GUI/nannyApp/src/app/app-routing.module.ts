import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { SearchComponent } from './search/search.component';
import { NannyProfilePageComponent } from './nanny-profile-page/nanny-profile-page.component';
import { NannyJobsComponent } from './nanny-jobs/nanny-jobs.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentJobsComponent } from './parent-jobs/parent-jobs.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'create-account', component: CreateAccountComponent},
  {path: 'settings/:username', component: SettingsPageComponent},
  {path: 'nanny-profile/:username', component: NannyProfilePageComponent},
  {path: 'nanny-jobs/:username', component: NannyJobsComponent},
  {path: 'parent-jobs/:username', component: ParentJobsComponent},
  {path: 'search', component: SearchComponent},
  {path: 'home', component: HomePageComponent}, // default URL (check if logged in?)
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '404', pathMatch: 'full'}, // unknown path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
