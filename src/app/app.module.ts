import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from '@core/core.module';
import { HomeModule } from './pages/home/home.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
