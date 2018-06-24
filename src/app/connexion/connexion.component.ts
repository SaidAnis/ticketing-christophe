import {Component, OnInit, Input} from '@angular/core';
import {EntrepriseService} from '../services/entreprise.service';
import {Entreprise} from '../models/entreprise';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  @Input() authentification: boolean;
  entreprise: Entreprise;
  erreur: string;

  constructor(private entrepriseService: EntrepriseService) {
  }

  ngOnInit() {
    this.entreprise = this.entrepriseService.entreprise;
  }

  onConnexion(a: NgForm) {
    if (a.value['mail'] == 'christophe.trebaol@imie.fr' && a.value['password'] == '1234') {
      this.entreprise.authentification = true;
    } else {
      this.erreur = 'Erreur de connexion';
    }
  }
}
