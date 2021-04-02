import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetComponent } from './components/widget/widget.component';
import { InnerOneComponent } from './components/innerOne/innerOne.component';
import { InnerTwoComponent } from './components/innerTwo/innerTwo.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    InnerOneComponent,
    InnerTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
