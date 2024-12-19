import { Component, inject, OnInit, signal } from '@angular/core';
import { VillianService } from '../../services/villian.service';

@Component({
  selector: 'app-villian-list',
  imports: [],
  templateUrl: './villian-list.component.html',
  styleUrl: './villian-list.component.scss',
  providers: [VillianService]
})
export class VillianListComponent implements OnInit {
  private villanService = inject(VillianService)

  villans = signal<string[]>([])

  ngOnInit(): void {
      this.villans.set(this.villanService.getVillans())
  }
}
