import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() ncard:Card;
  constructor() { }

  ngOnInit() {
  }
    upvote(){
      this.ncard.votes++;
    }
    downvote(){
      this.ncard.votes--;
    }
}
