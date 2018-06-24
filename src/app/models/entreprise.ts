import {Ticket} from './ticket';
import {Personne} from './personne';

export class Entreprise {
  tabPersonne: Personne[];
  tabTicket: Ticket[];

  constructor() {
    this.tabPersonne = [];
    this.tabTicket = [];
  }
}
