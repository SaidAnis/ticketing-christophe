import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Ticket} from '../models/ticket';
import {EntrepriseService} from '../services/entreprise.service';
import {Entreprise} from '../models/entreprise';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() tabTicket = [];
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
