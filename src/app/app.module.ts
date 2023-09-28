import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './partials/side-nav/side-nav.component';
import { MainComponent } from './partials/main/main.component';
import { CasesComponent } from './partials/cases/cases.component';
import { CasesTableComponent } from './partials/cases-table/cases-table.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MainDocumentComponent } from './partials/main-document/main-document.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MainComponent,
    CasesComponent,
    CasesTableComponent,
    DocumentsComponent,
    DashboardComponent,
    LandingPageComponent,
    MainDocumentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
