import { MatTooltipModule } from '@angular/material/tooltip';
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
import { BadgeComponent } from './components/default/badge/badge.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectSectionComponent } from './components/sections/project-section/project-section.component';
import { CarouselComponent } from './components/default/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent,
    ButtonComponent,
    MenuComponent,
    SkillsSectionComponent,
    ContactSectionComponent,
    ContactItemComponent,
    BadgeComponent,
    ProjectSectionComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
