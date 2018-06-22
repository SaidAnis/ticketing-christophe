import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ComponentTicketComponent} from './component-ticket/component-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentTicketComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
