import {Ticket} from './ticket';
import {Personne} from './personne';

export class Entreprise {
  authentification = false;
  tabPersonne: Personne[];
  tabTicket: Ticket[];

  constructor() {
    this.authentification;
    this.tabPersonne = [];
    this.tabTicket = [];
  }
}
