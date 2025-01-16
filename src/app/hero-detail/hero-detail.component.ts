import { Component, inject, OnInit } from '@angular/core';
import { Hero, HeroService } from '../services/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  imports: [AsyncPipe],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent implements OnInit {
 private heroService = inject(HeroService)
 private route = inject(ActivatedRoute)

 hero$!: Observable<Hero | undefined>

  ngOnInit(): void {
      console.log(this.route.snapshot)
      const heroId = this.route.snapshot.params['id']
      this.hero$ = this.heroService.getHeroById(heroId)
      
  }
}
