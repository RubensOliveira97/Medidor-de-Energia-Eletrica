import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RealTimeComponent } from './components/real-time/real-time.component';
import { InsertEquipComponent } from './components/insert-equip/insert-equip.component';
import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'monitor',component:RealTimeComponent},
  { path:'insert-equip', component:InsertEquipComponent},
  { path:'about', component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
