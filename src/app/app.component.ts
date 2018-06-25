import {Component, OnInit} from '@angular/core';
import {Entreprise} from './models/entreprise';
import {EntrepriseService} from './services/entreprise.service';
import {Ticket} from './models/ticket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ticket: Ticket;
  entreprise:  Entreprise;
  authentification = false;

  constructor(private entrepriseService: EntrepriseService) {
  }

  ngOnInit() {
    this.entreprise = this.entrepriseService.entreprise;
  }

}


