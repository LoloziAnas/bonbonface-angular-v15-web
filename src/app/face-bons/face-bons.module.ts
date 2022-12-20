import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import { RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {SingleFaceBonComponent} from "./components/single-face-bon/single-face-bon.component";
import {FaceBonListComponent} from "./components/face-bon-list/face-bon-list.component";
import {NewFaceBonComponent} from "./components/new-face-bon/new-face-bon.component";
import {FaceBonDetailComponent} from "./components/face-bon-detail/face-bon-detail.component";
import {FaceBonsRoutingModule} from "./face-bons-routing.module";


@NgModule({
  declarations: [
    SingleFaceBonComponent,
    FaceBonListComponent,
    NewFaceBonComponent,
    FaceBonDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FaceBonsRoutingModule
  ]
})
export class FaceBonsModule { }
