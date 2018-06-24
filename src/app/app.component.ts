import {Component, OnInit} from '@angular/core';
import {Entreprise} from './models/entreprise';
import {EntrepriseService} from './services/entreprise.service';
import {NgForm} from '@angular/forms';
import {Ticket} from './models/ticket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  entreprise: Entreprise;
  prenom = 'Christophe';
  ticketId = 0;

  constructor(private entrepriseService: EntrepriseService) {
  }

  ngOnInit() {
    this.entreprise = this.entrepriseService.entreprise;
  }

  onNouveau() {
    this.entrepriseService.nouveauTicket();
  }

  onAjouterTicket(a: NgForm) {
    this.ticketId++;
    const t = new Ticket(this.ticketId, a.value['categorie'], 'En cours', a.value['objet'], a.value['message']);
    this.entrepriseService.ajouterTicket(t);
  }

}


