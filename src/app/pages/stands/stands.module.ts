import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandsComponent } from './stands.component';
import { StandsRoutingModule } from './stands-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StandsRoutingModule
  ],
  declarations: [StandsComponent]
})
export class StandsModule { }
