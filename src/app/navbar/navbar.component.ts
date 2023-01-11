import { Component, OnInit } from '@angular/core';
import { Info } from '../models/info';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  info: Info = new Info();

  constructor() { }

  ngOnInit(): void {
  }

  onPonuda() {
    this.info.subject = 'Ovako izgleda nasa ponuda:'
    this.info.description = 'Soba 5'
    console.log("Ponuda");
  }
  onPreporuka() {
    this.info.subject = 'Preporuka za obrok:'
    this.info.description = 'Piletina'
    console.log("Preporuka");
  }
  onONama() {
    this.info.subject = 'O nama:'
    this.info.description = 'Mi smo methotels...'
    console.log("DS");
  }

}
