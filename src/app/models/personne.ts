export class Personne {
  tabPersonne: any = [];
  constructor(public id: number, public prenom: string, public nom: string, mail: string) {
    this.tabPersonne = [];
  }
}
