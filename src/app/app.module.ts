import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoverComponent } from './cover/cover.component';
import { AboutComponent } from './about/about.component';
import { ParticlesModule } from 'angular-particle';
import { HighchartsChartModule } from 'highcharts-angular';
import { GapiService } from './gapi-service.service';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, HttpClientModule, ParticlesModule, HighchartsChartModule ],
  declarations: [ AppComponent, CoverComponent, AboutComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GapiService]
})
export class AppModule { }
