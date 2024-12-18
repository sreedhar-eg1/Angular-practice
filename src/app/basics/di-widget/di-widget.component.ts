import { Component, inject, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { ExperimentService } from '../../services/experiment.service';

@Component({
  selector: 'app-di-widget',
  imports: [],
  templateUrl: './di-widget.component.html',
  styleUrl: './di-widget.component.scss',
  // Now if we compare mainService and experimentService it return false
  // providers: [{ provide: MainService, useClass: ExperimentService }],
  //Now both service will have same instances
  // providers: [{ provide: MainService, useExisting: ExperimentService }],
  // if we wan to pass any value then
  providers: [
    {
      provide: MainService,
      useValue: [
        { id: 1, name: 'user 1' },
        { id: 2, name: 'user 2' },
        { id: 3, name: 'user 3' },
      ],
    },
  ],
})
export class DiWidgetComponent implements OnInit {
  private mainService = inject(MainService);
  private experimentService = inject(ExperimentService);

  constructor() {}

  ngOnInit(): void {
    console.log(this.mainService);
    console.log(this.experimentService);
    console.log(this.mainService.mainStatic)
  }
}
