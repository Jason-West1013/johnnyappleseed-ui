import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { ResponsiveService } from './shared/services/responsive.service';
import { HomeModule } from './pages/home/home.module';
import { AboutModule } from './pages/about/about.module';
import { StandsModule } from './pages/stands/stands.module';
import { RecipesModule } from './pages/recipes/recipes.module';
import { NavModule } from './shared/nav/nav.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NavModule,
    HomeModule,
    AboutModule,
    StandsModule,
    RecipesModule,
    AppRoutingModule
  ],
  providers: [ResponsiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
