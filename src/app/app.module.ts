import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InfoBoxesComponent } from './info-boxes/info-boxes.component';
import { DynamicBoxComponent } from './dynamic-box/dynamic-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfoBoxesComponent,
    DynamicBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
