import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceBonComponent } from './face-bon/face-bon.component';
import { FaceBonListComponent } from './face-bon-list/face-bon-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceBonComponent,
    FaceBonListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
