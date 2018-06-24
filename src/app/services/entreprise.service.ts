import {Entreprise} from '../models/entreprise';
import {Ticket} from '../models/ticket';

export class EntrepriseService {
  entreprise = new Entreprise();


  nouveauTicket() {
    console.log('Nouveau Ticket');
  }

  ajouterTicket(t: Ticket) {
    console.log(this.entreprise.tabTicket);
    this.entreprise.tabTicket.unshift(t);
  }

  supprimerTicket(id: number) {
    for (const i in this.entreprise.tabTicket) {
      if (id == this.entreprise.tabTicket[i].id) {
        this.entreprise.tabTicket.splice(parseInt(i), 1);
      }
    }
  }
}
