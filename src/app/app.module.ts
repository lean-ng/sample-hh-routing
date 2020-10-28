import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';
import { AboutComponent } from './core/components/about/about.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ExratesModule } from './exrates/exrates.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ExratesModule,
    CrisisCenterModule,
    // contains catch-all route! Must be last!
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
