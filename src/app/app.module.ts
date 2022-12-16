import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceBonComponent } from './face-bon/face-bon.component';
import { FaceBonListComponent } from './face-bon-list/face-bon-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { FaceBonDetailComponent } from './face-bon-detail/face-bon-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceBonComponent,
    FaceBonListComponent,
    HeaderComponent,
    LoadingPageComponent,
    FaceBonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
