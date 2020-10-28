import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import { CurrencyRatesComponent } from './components/currency-rates/currency-rates.component';

const routes: Routes = [
  {
    path: 'rates', canActivate: [AuthGuard],
    children: [
      { path: '', component: CurrencyListComponent },
      { path: ':currency', component: CurrencyRatesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExratesRoutingModule { }
