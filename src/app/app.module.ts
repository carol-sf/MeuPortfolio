import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainSectionComponent } from './components/sections/main-section/main-section.component';
import { ButtonComponent } from './components/default/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
