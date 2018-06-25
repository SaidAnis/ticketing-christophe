import {Ticket} from './ticket';
import {Personne} from './personne';

export class Entreprise {
  newTicket = false;
  authentification = false;
  tabPersonne: Personne[];
  tabTicket: Ticket[];

  constructor() {
    this.newTicket;
    this.authentification;
    this.tabPersonne = [];
    this.tabTicket = [];
  }
}
