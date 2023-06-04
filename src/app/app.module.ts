import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Headline1Component } from './headline1/headline1.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { Headline3Component } from './headline3/headline3.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImprintComponent } from './imprint/imprint.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { DataprotectionComponent } from './dataprotection/dataprotection.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    Headline1Component,
    FooterComponent,
    PortfolioComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    Headline3Component,
    WorksComponent,
    ContactComponent,
    ImprintComponent,
    Sidebar2Component,
    DataprotectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


