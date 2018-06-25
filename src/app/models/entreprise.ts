import {Ticket} from './ticket';
import {Personne} from './personne';

export class Entreprise {
  ticketId = 0;
  newTicket = false;
  authentification = false;
  tabPersonne: Personne[];
  tabTicket: Ticket[];

  constructor() {
    this.ticketId;
    this.newTicket;
    this.authentification;
    this.tabPersonne = [];
    this.tabTicket = [];
  }
}
