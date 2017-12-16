import { Component, OnInit, ViewChild, ElementRef, Renderer2, Renderer } from '@angular/core';
import { quienesSomosService } from '../../services/quienesSomos.service'
import { Router } from '@angular/router'
import * as Materialize from 'angular2-materialize'

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-quienesSomos',
  templateUrl: './quienesSomos.component.html',
  styleUrls: ['./quienesSomos.component.css']
})
export class quienesSomosComponent implements OnInit {

  constructor() { }
  
    ngOnInit() {
      $(".button-collapse").sideNav();
    }
  
}



