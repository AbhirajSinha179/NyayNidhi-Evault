import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DocumentsComponent } from './pages/documents/documents.component';

const routes: Routes=[
  {path: '', component: LandingPageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboard/:id', component: DashboardComponent},
  {path: 'documents', component: DocumentsComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
