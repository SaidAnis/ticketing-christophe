import {Entreprise} from '../models/entreprise';
import {Ticket} from '../models/ticket';

export class EntrepriseService {
  entreprise = new Entreprise();

  nouveauTicket() {
    this.entreprise.newTicket = true;
  }

  ajouterTicket(t: Ticket) {
    this.entreprise.tabTicket.unshift(t);
    this.entreprise.newTicket = false;
  }

  supprimerTicket(id: number) {
    for (const i in this.entreprise.tabTicket) {
      if (id == this.entreprise.tabTicket[i].id) {
        this.entreprise.tabTicket.splice(parseInt(i), 1);
      }
    }
  }

  annulerTicket() {
    this.entreprise.newTicket = false;
  }
}
