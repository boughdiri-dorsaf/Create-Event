import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Event} from '../models/event';
import * as moment from 'moment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input("event") event: Event;
  @Output() eventEmit = new EventEmitter<Event>();
  date_range : any;


  ngOnInit(){
    let today = new Date();
    let firstDate = new Date();
    firstDate.setDate(today.getDate() - 1);
    this.date_range = [ firstDate, today];
  }

  editEvent(form : NgForm) {
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
