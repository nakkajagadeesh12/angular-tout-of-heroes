import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero = HEROES;
  selectedHero: Hero;
  constructor() {
    console.log(this.hero, "hero");
  }

  ngOnInit() {
  }

  onSelect(hero: Hero) {
    console.log(hero, "hero")
    this.selectedHero = hero;
  }

}