import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CfBasicInfoTag } from './basic-info/basic-info.tag';

const routes: Routes = [{
  path: '',
  component: CfBasicInfoTag,
  // children: [{
  //   path: ''
  // }]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CfBasicInfoTag]
})
export class FbinitMod {}
