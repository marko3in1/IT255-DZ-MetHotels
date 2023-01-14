import { Component, OnInit } from '@angular/core';
import { Room } from '../models/room';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
    room: Room = new Room(1,5,'Room 1',123,3);
    rooms: Room[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onRecommendation() {
    this.rooms.push(this.room);
  }

}
