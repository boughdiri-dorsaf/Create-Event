import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { Event } from '../models/event';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }
  date_range : any;
  titre : string;
  event : Event;

  @Output() eventEmit = new EventEmitter<Event>();


  ngOnInit() {
    let today = new Date();
    let firstDate = new Date();
    firstDate.setDate(today.getDate() - 1);
    this.date_range = [ firstDate, today];
  }

  addEvent(form : NgForm) {
    var titre = form.value.titre;
      var dateDeb = form.value.date_range[0];
      var dateF = form.value.date_range[1];
    var dateDebut = moment(dateDeb).format('DD/MM/YYYY');
    var dateFin = moment(dateF).format('DD/MM/YYYY');
    var organisateur = form.value.organisateur;
    var description = form.value.description;

    this.event = new Event(titre, description, organisateur, dateDebut, dateFin);
    this.eventEmit.emit(this.event);
}

}
