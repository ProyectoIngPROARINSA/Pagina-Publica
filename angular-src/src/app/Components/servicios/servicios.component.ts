import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service'
import { Router } from '@angular/router'
import * as Materialize from 'angular2-materialize'

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor() { }
  
    ngOnInit() {
      $(".button-collapse").sideNav();
    }
    
}