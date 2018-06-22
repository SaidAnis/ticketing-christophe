import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-component-ticket',
  templateUrl: './component-ticket.component.html',
  styleUrls: ['./component-ticket.component.scss']
})
export class ComponentTicketComponent implements OnInit {
  @Input() tabTicket: any = [];

  constructor() {
  }

  ngOnInit() {
  }

  onSupprimerTicket() {
    console.log(this.tabTicket);
  }
}
