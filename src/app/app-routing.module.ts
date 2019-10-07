import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetDetailComponent }  from './planet-detail/planet-detail.component';

const routes: Routes = [
  { path: 'planets', component: PlanetsComponent },
  { path: '', redirectTo: '/planets' , pathMatch: 'full' },
  { path: 'planet/:name', component: PlanetDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }