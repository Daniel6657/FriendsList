import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { RoutingPath } from './routing-path';
import { UserDetailsComponent } from './components/user-details/user-details.component';


const routes: Routes = [
  { path: RoutingPath.users, component: UserListComponent, pathMatch: 'full' },
  { path: RoutingPath.users + '/:userId', component: UserDetailsComponent, pathMatch: 'full' },
  { path: '**', component: UserListComponent, pathMatch: 'full' },
  { path: '', component: UserListComponent, pathMatch: 'full' },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
