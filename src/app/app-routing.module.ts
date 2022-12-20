import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FaceBonListComponent} from "./face-bons/components/face-bon-list/face-bon-list.component";
import {LoadingPageComponent} from "./loading-page/components/loading-page.component";
import {FaceBonDetailComponent} from "./face-bons/components/face-bon-detail/face-bon-detail.component";
import {NewFaceBonComponent} from "./face-bons/components/new-face-bon/new-face-bon.component";

const routes: Routes = [
  { path: 'facesnaps', loadChildren:() => import('./face-bons/face-bons.module').then(m => m.FaceBonsModule)},
  { path: '', component: LoadingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
