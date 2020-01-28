import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BuildoneComponent } from './pages/buildone/buildone.component';
import { PrivateComponent } from './pages/private/private.component';
import { FullComponent } from './full/full.component';
import { RedirectComponent } from './redirect/redirect.component';
import { TestUIComponent } from './pages/test-ui/test-ui.component';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      loadChildren: './authentication/authentication.module#AuthenticationModule'
    }]
  },
  {
    path: '',
    component: FullComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'night/image/:userId', component: BuildoneComponent },
      { path: 'private/image/:userId', component: PrivateComponent },
      { path: 'redirect', component: RedirectComponent },
      { path: 'testUI', component:TestUIComponent}
    ]
},
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'night', component: NightComponent },
  // { path: 'buildone/:userId', component: BuildoneComponent },
  // { path: 'private/image/:userId', component: BuildtwoComponent },
  // { path: 'private/', component: PrivateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
