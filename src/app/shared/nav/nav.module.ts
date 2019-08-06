import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavComponent,
    MobileNavComponent
  ],
  exports: [
    NavComponent,
    MobileNavComponent
  ]
})
export class NavModule { }
