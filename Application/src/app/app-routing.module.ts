import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventComponent } from './event/event.component';
import { SpecialEventComponent } from './special-event/special-event.component';

const routes: Routes = [

{
  path: 'register', component: RegisterComponent
},
{
  path: 'login', component: LoginComponent
},
{
  path: 'events', component : EventComponent
},
{
  path : 'special' , component : SpecialEventComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
