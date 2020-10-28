import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisCenterComponent } from './components/crisis-center/crisis-center.component';
import { CrisisDetailsComponent } from './components/crisis-details/crisis-details.component';
import { CrisisHomeComponent } from './components/crisis-home/crisis-home.component';

const routes: Routes = [
  {
    path: 'krisen', component: CrisisCenterComponent,
    children: [
      { path: '', component: CrisisHomeComponent },
      { path: ':country', component: CrisisDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule { }
