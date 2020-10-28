import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisCenterComponent } from './components/crisis-center/crisis-center.component';
import { CrisisListComponent } from './components/crisis-list/crisis-list.component';
import { CrisisHomeComponent } from './components/crisis-home/crisis-home.component';
import { CrisisDetailsComponent } from './components/crisis-details/crisis-details.component';


@NgModule({
  declarations: [CrisisCenterComponent, CrisisListComponent, CrisisHomeComponent, CrisisDetailsComponent],
  imports: [
    CommonModule,
    CrisisCenterRoutingModule
  ]
})
export class CrisisCenterModule { }
