import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) {
    console.log(this.hero, "hero");
  }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes() {
    this.hero = this.heroService.getHeroes();
  }

  onSelect(hero: Hero) {
    console.log(hero, "hero")
    this.selectedHero = hero;
  }

}