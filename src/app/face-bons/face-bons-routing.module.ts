import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SingleFaceBonComponent} from "./components/single-face-bon/single-face-bon.component";
import {FaceBonListComponent} from "./components/face-bon-list/face-bon-list.component";
import {NewFaceBonComponent} from "./components/new-face-bon/new-face-bon.component";
import {AuthGuard} from "../core/guards/auth.guard";


const routes: Routes = [
  {path: 'create', component: NewFaceBonComponent, canActivate: [AuthGuard]},
  {path: ':id', component: SingleFaceBonComponent, canActivate: [AuthGuard]},
  {path: '', component: FaceBonListComponent, canActivate: [AuthGuard]}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FaceBonsRoutingModule { }
