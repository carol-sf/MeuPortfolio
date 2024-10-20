import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainSectionComponent } from './components/sections/main-section/main-section.component';
import { ButtonComponent } from './components/default/button/button.component';
import { MenuComponent } from './components/default/menu/menu.component';
import { SkillsSectionComponent } from './components/sections/skills-section/skills-section.component';
import { ContactSectionComponent } from './components/sections/contact-section/contact-section.component';
import { ContactItemComponent } from './components/default/contact-item/contact-item.component';
import { ProjectWebPoliceComponent } from './components/sections/project-web-police/project-web-police.component';
import { BadgeComponent } from './components/default/badge/badge.component';
import { ProjectBizuAppComponent } from './components/sections/project-bizu-app/project-bizu-app.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent,
    ButtonComponent,
    MenuComponent,
    SkillsSectionComponent,
    ContactSectionComponent,
    ContactItemComponent,
    ProjectWebPoliceComponent,
    BadgeComponent,
    ProjectBizuAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
