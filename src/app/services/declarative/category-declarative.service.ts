import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, share, shareReplay } from 'rxjs/operators';
import { Category } from '../../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryDeclarativeService {
  private http = inject(HttpClient);

  categories$ = this.http
    .get<{ [id: string]: Category }>(
      'https://angular-rxjs-advance-default-rtdb.firebaseio.com/categories.json'
    )
    .pipe(
      map((category) => {
        let categoryData: Category[] = [];

        for (const id in category) {
          categoryData.push({ ...category[id], id: id } as Category);
        }

        return categoryData;
      }),
      shareReplay(1)
    );

  constructor() {}
}
