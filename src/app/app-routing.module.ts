import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataprotectionComponent } from './dataprotection/dataprotection.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'dataprotection', component: DataprotectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(public router: Router) {}
 }
