import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandsComponent } from './stands.component';

const standsRoutes: Routes = [
    { path: 'stands', component: StandsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(standsRoutes)],
  exports: [RouterModule]
})
export class StandsRoutingModule { }
