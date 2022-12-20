import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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
