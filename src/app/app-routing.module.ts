import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoadingPageComponent} from "./loading-page/components/loading-page.component";

const routes: Routes = [
  { path: 'facesnaps', loadChildren:() => import('./face-bons/face-bons.module').then(m => m.FaceBonsModule)},
  { path: '', component: LoadingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
