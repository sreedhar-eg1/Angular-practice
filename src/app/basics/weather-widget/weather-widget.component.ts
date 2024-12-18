import { Component, inject, OnInit } from '@angular/core';
import { ConsoleLoggerService } from '../../services/console-logger.service';
import { LoggerService } from '../../services/logger.service';
import { TextService } from '../../services/text.service';

@Component({
  selector: 'app-weather-widget',
  imports: [],
  templateUrl: './weather-widget.component.html',
  styleUrl: './weather-widget.component.scss',
  providers: [
    {
      provide: LoggerService,
      useFactory: (textService: TextService) =>
        textService.status() ? new ConsoleLoggerService() : new LoggerService(),
      deps: [TextService]
    },
  ],
})
export class WeatherWidgetComponent implements OnInit {
  private loggerService = inject(LoggerService);

  ngOnInit(): void {
    this.loggerService.log(
      ' This is from weather widget component to loggerService'
    );
  }
}
