import { Component, inject, OnInit } from '@angular/core';
import { DiService } from '../../services/di.service';

@Component({
  selector: 'app-di-child',
  imports: [],
  templateUrl: './di-child.component.html',
  styleUrl: './di-child.component.scss',
  // providers: [DiService]
})
export class DiChildComponent implements OnInit {
  private diService = inject(DiService, {self: true, optional: true})

  ngOnInit(): void {
      console.log(this.diService);
      
  }
}
