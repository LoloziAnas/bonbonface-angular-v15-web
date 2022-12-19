import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingleFaceBonComponent } from './single-face-bon/single-face-bon.component';
import { FaceBonListComponent } from './face-bon-list/face-bon-list.component';
import { AppRoutingModule } from './app-routing.module';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { FaceBonDetailComponent } from './face-bon-detail/face-bon-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewFaceBonComponent } from './new-face-bon/new-face-bon.component';
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    SingleFaceBonComponent,
    FaceBonListComponent,
    LoadingPageComponent,
    FaceBonDetailComponent,
    NewFaceBonComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
