import {Component, OnInit} from '@angular/core';
import {Entreprise} from './models/entreprise';
import {EntrepriseService} from './services/entreprise.service';
import {NgForm} from '@angular/forms';
import {Ticket} from './models/ticket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  entreprise:  Entreprise;
  authentification = false;

  constructor(private entrepriseService: EntrepriseService) {
  }

  ngOnInit() {
    this.entreprise = this.entrepriseService.entreprise;
  }

}


