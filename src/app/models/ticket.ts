export class Ticket {
  tabTicket: any = [];
  constructor(public id: number, public date: string, public status: string, message: string) {
    this.tabTicket = [];
  }
}
