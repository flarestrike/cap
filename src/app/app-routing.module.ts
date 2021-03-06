import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'fbinit',
  loadChildren: '@mod/fbinit#FbinitMod'
}, {
  path: '**', pathMatch: 'full', redirectTo: 'fbinit'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
