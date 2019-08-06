import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { ResponsiveService } from './shared/services/responsive.service';
import { HomeModule } from './pages/home/home.module';
import { HeaderComponent } from './shared/header/header.component';
import { MobileHeaderComponent } from './shared/header/mobile-header/mobile-header.component';
import { AboutModule } from './pages/about/about.module';
import { StandsModule } from './pages/stands/stands.module';
import { RecipesModule } from './pages/recipes/recipes.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HeaderComponent,
    MobileHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
