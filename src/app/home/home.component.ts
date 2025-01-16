import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  goToItem() {
    this.router.navigate(['item'], {
      relativeTo: this.route
    })
  }
}
