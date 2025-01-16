import { Component, inject } from '@angular/core';
import { Hero, HeroService } from '../services/hero.service';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  imports: [AsyncPipe],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.scss'
})
export class HeroListComponent {
  private heroservice = inject(HeroService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  heroes$ = this.heroservice.getHeroes()

  goToHero(hero: Hero) {
    this.router.navigate([hero.id], {relativeTo: this.route})
  }
}
