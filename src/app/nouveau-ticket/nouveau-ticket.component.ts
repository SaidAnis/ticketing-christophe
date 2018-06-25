import {Component, OnInit, Input} from '@angular/core';
import {EntrepriseService} from '../services/entreprise.service';
import {Entreprise} from '../models/entreprise';
import {NgForm} from '@angular/forms';
import {Ticket} from '../models/ticket';

@Component({
  selector: 'app-nouveau-ticket',
  templateUrl: './nouveau-ticket.component.html',
  styleUrls: ['./nouveau-ticket.component.scss']
})
export class NouveauTicketComponent implements OnInit {
  @Input() tabTicket: any;
  entreprise: Entreprise;

  constructor(private entrepriseService: EntrepriseService) {
  }

  ngOnInit() {
    this.entreprise = this.entrepriseService.entreprise;
  }

  onAjouterTicket(a: NgForm) {
    this.entreprise.ticketId++;
    let t = new Ticket(this.entreprise.ticketId, a.value['categorie'], 'En cours', a.value['objet'], a.value['message']);
    this.entrepriseService.ajouterTicket(t);
  }

  onAnnulerTicket() {
    this.entrepriseService.annulerTicket();
  }
}
