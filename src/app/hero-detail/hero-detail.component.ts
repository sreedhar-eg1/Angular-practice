import { Component, inject, OnInit } from '@angular/core';
import { Hero, HeroService } from '../services/hero.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss',
})
export class HeroDetailComponent implements OnInit {
  private heroService = inject(HeroService);
  private route = inject(ActivatedRoute);

  //  hero$!: Observable<Hero | undefined>
  hero$: Observable<Hero | undefined> = this.route.queryParams.pipe(
    switchMap((data) => this.heroService.getHeroById(data['id']))
  );

  ngOnInit(): void {
    // One way of accesing params data
    // const heroId = this.route.snapshot.params['id']
    // this.hero$ = this.heroService.getHeroById(heroId)
  }
}
