export class Event {
  titre : string;
  description : string;
  organisateur : string;
  date_debut : string;
  date_fin : string;

  constructor (titre : string, description : string, organisateur : string, date_debut : string, date_fin : string){
    this.titre = titre;
    this.description = description;
    this.organisateur = organisateur;
    this.date_debut = date_debut;
    this.date_fin = date_fin;
  }
}
