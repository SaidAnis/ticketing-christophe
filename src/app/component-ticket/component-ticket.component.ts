import {Component, OnInit, Input} from '@angular/core';
import {EntrepriseService} from '../services/entreprise.service';
import {Entreprise} from '../models/entreprise';

@Component({
  selector: 'app-component-ticket',
  templateUrl: './component-ticket.component.html',
  styleUrls: ['./component-ticket.component.scss']
})
export class ComponentTicketComponent implements OnInit {
  @Input() tabTicket = [];
  valueDate = new Date();
  entreprise: Entreprise;

  constructor(private entrepriseService: EntrepriseService) {
  }

  ngOnInit() {
    this.entreprise = this.entrepriseService.entreprise;
  }

  onSupprimerTicket(id: number) {
    this.entrepriseService.supprimerTicket(id);
  }

  onDeconnexion() {
    this.entreprise.authentification = false;
  }
}
