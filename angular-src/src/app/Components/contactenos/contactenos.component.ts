import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { contactenosService } from '../../services/contactenos.service'
import { Router } from '@angular/router'
import * as Materialize from 'angular2-materialize'

declare var jQuery: any;
declare var $: any;


@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class contactenosComponent implements OnInit {

  constructor() { }
  
    ngOnInit() {
      $(".button-collapse").sideNav();
    }
  
}
