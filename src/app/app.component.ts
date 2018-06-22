import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  prenom = 'Christophe';
  tabTicket = [
    {
      id: 0,
      titre: 'Ampoule cassée',
      datePub: '23/06/2018',
      status: 'En cours',
      message: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi fermentum tincidunt enim vel auctor. Phasellus enim felis, cursus non rhoncus sed, vulputate ut erat. Mauris mollis diam a gravida suscipit. Aliquam felis dolor, pharetra aliquet feugiat sed, vestibulum venenatis arcu. Vivamus ultrices sollicitudin enim, dapibus dignissim justo fringilla eu. Quisque nec nunc pharetra, mollis neque ut, posuere lacus. '
    },
    {
      id: 1,
      titre: 'Salle 211 B en rénovation',
      datePub: '23/06/2018',
      status: 'Terminé validé',
      message: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi fermentum tincidunt enim vel auctor. Phasellus enim felis, cursus non rhoncus sed, vulputate ut erat. Mauris mollis diam a gravida suscipit. Aliquam felis dolor, pharetra aliquet feugiat sed, vestibulum venenatis arcu. Vivamus ultrices sollicitudin enim, dapibus dignissim justo fringilla eu. Quisque nec nunc pharetra, mollis neque ut, posuere lacus. '
    },
    {
      id: 2,
      titre: 'Visite de la tour Tanguy du 30/08/2018',
      datePub: '23/06/2018',
      status: 'Terminé non validé',
      message: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi fermentum tincidunt enim vel auctor. Phasellus enim felis, cursus non rhoncus sed, vulputate ut erat. Mauris mollis diam a gravida suscipit. Aliquam felis dolor, pharetra aliquet feugiat sed, vestibulum venenatis arcu. Vivamus ultrices sollicitudin enim, dapibus dignissim justo fringilla eu. Quisque nec nunc pharetra, mollis neque ut, posuere lacus. '
    },
    {
      id: 3,
      titre: 'Place de parking',
      datePub: '23/06/2018',
      status: 'Terminé non validé',
      message: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi fermentum tincidunt enim vel auctor. Phasellus enim felis, cursus non rhoncus sed, vulputate ut erat. Mauris mollis diam a gravida suscipit. Aliquam felis dolor, pharetra aliquet feugiat sed, vestibulum venenatis arcu. Vivamus ultrices sollicitudin enim, dapibus dignissim justo fringilla eu. Quisque nec nunc pharetra, mollis neque ut, posuere lacus. '
    },
    {
      id: 4,
      titre: 'Vote pour le BDE',
      datePub: '23/06/2018',
      status: 'Terminé validé',
      message: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi fermentum tincidunt enim vel auctor. Phasellus enim felis, cursus non rhoncus sed, vulputate ut erat. Mauris mollis diam a gravida suscipit. Aliquam felis dolor, pharetra aliquet feugiat sed, vestibulum venenatis arcu. Vivamus ultrices sollicitudin enim, dapibus dignissim justo fringilla eu. Quisque nec nunc pharetra, mollis neque ut, posuere lacus. '
    }
  ];

  onNouveau() {
    console.log(this.tabTicket);
  }
}


