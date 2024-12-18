import { Component, inject, InjectionToken, OnInit } from '@angular/core';
import { ColorDirective } from '../../directives/color.directive';
import { BackgroundColorDirective } from '../../directives/background-color.directive';
import { LoggerService } from '../../services/logger.service';
import { ConsoleLoggerService } from '../../services/console-logger.service';
import { Logger } from '../../models/logger.model';

const Logger_Token = new InjectionToken<Logger>('logger')

@Component({
  selector: 'app-widget',
  imports: [],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss',
  // without any input values
  // hostDirectives: [
  //   ColorDirective,
  //   BackgroundColorDirective
  // ]
  //With input values
  // hostDirectives: [
  //   {
  //     directive: ColorDirective,
  //     inputs: ['color'],
  //     outputs: ['colorChanged']
  //   },
  //   BackgroundColorDirective
  // ]
  // Giving alias name to the input
  hostDirectives: [
    {
      directive: ColorDirective,
      inputs: ['color: textColor'],
      outputs: ['colorChanged']
    },
    BackgroundColorDirective
  ],
  // providing a service on component level
  // providers: [LoggerService],
  // Above providers can be expanded as below
  providers: [{provide: Logger_Token, useClass: ConsoleLoggerService}]
})
export class WidgetComponent implements OnInit {
  private loggerService = inject(Logger_Token)

  ngOnInit(): void {
      this.loggerService.log('This is a message from widget component to loggerService')
  }
}
