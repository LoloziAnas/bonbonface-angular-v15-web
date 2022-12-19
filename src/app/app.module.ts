import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingleFaceBonComponent } from './face-bons/components/single-face-bon/single-face-bon.component';
import { FaceBonListComponent } from './face-bons/components/face-bon-list/face-bon-list.component';
import { AppRoutingModule } from './app-routing.module';
import { LoadingPageComponent } from './loading-page/components/loading-page.component';
import { FaceBonDetailComponent } from './face-bons/components/face-bon-detail/face-bon-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewFaceBonComponent } from './face-bons/components/new-face-bon/new-face-bon.component';
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {FaceBonsModule} from "./face-bons/face-bons.module";
import {LoadingPageModule} from "./loading-page/loading-page.module";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FaceBonsModule,
    LoadingPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
