import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {ComponentTicketComponent} from './component-ticket/component-ticket.component';
import {EntrepriseService} from './services/entreprise.service';
import {Ticket} from './models/ticket';
import { MenuComponent } from './menu/menu.component';
import { ConnexionComponent } from './connexion/connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentTicketComponent,
    MenuComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EntrepriseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
