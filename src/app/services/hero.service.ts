import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Hero {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes: Hero[] = [
    {
      id: 1,
      name: 'Super Man',
      description: 'Man of Steel',
    },
    { id: 2, name: 'Bat Man', description: 'Dark Knight' },
  ];
  constructor() {}

  getHeroes() {
    return of(this.heroes)
  }

  getHeroById(id: number | string) {
    const hero = this.heroes.find(hero => hero.id === +id)

    return of(hero)
  }
}
