import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { RegformComponent } from './components/regform/regform.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { ViewlistComponent } from './components/viewlist/viewlist.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'form', component: RegformComponent},
  {path: 'viewlist', component: ViewlistComponent},
  {path: 'volunteer', component: VolunteerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
