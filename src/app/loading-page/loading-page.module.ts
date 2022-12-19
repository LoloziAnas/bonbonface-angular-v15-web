import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {LoadingPageComponent} from "./components/loading-page.component";

@NgModule({
  declarations: [LoadingPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[LoadingPageComponent]
})
export class LoadingPageModule { }
