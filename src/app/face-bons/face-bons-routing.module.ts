import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {SingleFaceBonComponent} from "./components/single-face-bon/single-face-bon.component";
import {FaceBonListComponent} from "./components/face-bon-list/face-bon-list.component";
import {NewFaceBonComponent} from "./components/new-face-bon/new-face-bon.component";


const routes: Routes = [
  {path: ':id', component: SingleFaceBonComponent},
  {path: '', component: FaceBonListComponent},
  {path: 'create', component: NewFaceBonComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FaceBonsRoutingModule { }
