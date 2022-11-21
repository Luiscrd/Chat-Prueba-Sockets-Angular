import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ChatComponent } from './pages/chat/chat.component';
import { LoginComponent } from './pages/login/login.component';
import { UserGuard } from './guards/user.guard';

const appRoutes: Routes = [
  {
    path: '',
    component: ChatComponent,
    canActivate: [UserGuard],
    canLoad: [UserGuard]
  },
  {path: 'login', component: LoginComponent },
  {path: '**', redirectTo: '', pathMatch: 'full'},
]

@NgModule({

  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
