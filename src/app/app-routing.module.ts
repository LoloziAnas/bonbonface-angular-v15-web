import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FaceBonListComponent} from "./face-bon-list/face-bon-list.component";

const routes: Routes = [
  { path: 'facesnaps', component: FaceBonListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
