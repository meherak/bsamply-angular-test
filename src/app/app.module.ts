import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from '@core/core.module';

import { AppComponent } from './app.component';
import { MoviesComponent } from './pages/movies/movies.component';

@NgModule({
  declarations: [AppComponent, MoviesComponent],
  imports: [BrowserModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
