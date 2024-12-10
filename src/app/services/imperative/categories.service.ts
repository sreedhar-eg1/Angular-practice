import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from '../../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<{[id: string]: Category}>('https://angular-rxjs-advance-default-rtdb.firebaseio.com/categories.json').pipe(
      map((category) => {
        let categoryData: Category[] = [];

        for (const id in category) {
          categoryData.push({ ...category[id], id: id } as Category);
        }

        return categoryData;
      })
    );
  }
}
