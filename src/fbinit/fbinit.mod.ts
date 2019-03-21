import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CfBasicInfoTag } from './basic-info/basic-info.tag';

const routes: Routes = [{
  path: '',
  component: CfBasicInfoTag
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [CfBasicInfoTag]
})
export class FbinitMod {}
