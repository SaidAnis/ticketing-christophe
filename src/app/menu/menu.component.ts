import {Component, Input, OnInit} from '@angular/core';
import {EntrepriseService} from '../services/entreprise.service';
import {Entreprise} from '../models/entreprise';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() nouveauTicket: any;
  @Input() tabTicket = [];
  entreprise: Entreprise;
  prenom = 'Christophe';


  constructor(private entrepriseService: EntrepriseService) {
  }

  ngOnInit() {
    this.entreprise = this.entrepriseService.entreprise;
  }

  onNouveau() {
    this.entrepriseService.nouveauTicket();
  }

}
