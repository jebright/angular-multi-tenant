import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ClientGuardService } from './client-guard.service';
import { ClientNotFoundComponent } from './client-not-found/client-not-found.component';
import { ClientDetailsComponent } from './client-details/client-details.component';

const routes: Routes = [
  {
    path: ':client',
    component: WelcomeComponent,
    canActivate: [ClientGuardService],
    children: [
      {
        path: 'detail',
        component: ClientDetailsComponent
      }
    ]
  },
  {
    path: '**',
    component: ClientNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
