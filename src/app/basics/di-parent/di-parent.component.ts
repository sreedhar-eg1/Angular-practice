import { Component, inject, OnInit, Optional } from '@angular/core';
import { DiChildComponent } from "../di-child/di-child.component";
import { DiService } from '../../services/di.service';

@Component({
  selector: 'app-di-parent',
  imports: [DiChildComponent],
  templateUrl: './di-parent.component.html',
  styleUrl: './di-parent.component.scss',
  // providers: [DiService]
})
export class DiParentComponent implements OnInit {
  // private diService = inject(DiService, { optional: true})
  private diService = inject(DiService, { host: true})

  // constructor(@Optional() private diService: DiService) {}

  ngOnInit(): void {
      console.log(this.diService);
      
  }
}
