import { Component, OnInit } from '@angular/core';
import { Event } from './models/event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'events';

  indiceActive : number;
  mode : string;
  eventActive : Event;
  events: Event[];


  ngOnInit(){
    this.events = [
      new Event("Formation Angular", 'pour tt les etudients', 'Orange Center', "22/05/2020","30/05/2020"),
    ];

  }




  edit(event: Event, i: number){
    this.eventActive = event;
    this.indiceActive = i;
    this.mode = 'edit';
  }

  add(){
    this.mode = 'add';
  }

  addEvent(event : Event){
    this.events.push(event);
    localStorage.setItem("listeEvent", JSON.stringify(this.events));
    this.mode = "";
  }

  updateEvent(event : Event){
    this.events[this.indiceActive] = event;
    this.mode = "";
  }

  supp(i: number){
    var r = confirm("Êtes-vous sûr de vouloir supprimer cet evenement ?");
    if (r == true) {
      this.events.splice(i, 1);
      localStorage.setItem("listeEvent", JSON.stringify(this.events));
    }

}





}
