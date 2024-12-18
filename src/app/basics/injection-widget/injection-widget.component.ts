import {
  assertInInjectionContext,
  Component,
  Inject,
  inject,
  InjectionToken,
  Injector,
  OnInit,
  runInInjectionContext,
} from '@angular/core';
import { MyServiceService } from '../../services/my-service.service';
import { LoggerService } from '../../services/logger.service';
import { ConsoleLoggerService } from '../../services/console-logger.service';

const myServiceToken = new InjectionToken<MyServiceService>('myService', {
  factory() {
    // Will create two different instance
      // return new MyServiceService()

      // To have same instance
      return inject(MyServiceService)

      // If myService service depends on any other services then we can inject inside the service
      // return new MyServiceService(inject(LoggerService))
  },
});

@Component({
  selector: 'app-injection-widget',
  imports: [],
  templateUrl: './injection-widget.component.html',
  styleUrl: './injection-widget.component.scss',
  // providers: [{provide: myServiceToken, useClass: MyServiceService}],
})
export class InjectionWidgetComponent implements OnInit {
  private myService = inject(MyServiceService)
  private myServiceInjection = inject(myServiceToken)

  injector = inject(Injector)

  // constructor(
  //   private myService: MyServiceService,
  //   @Inject(myServiceToken) private myServiceInjection: MyServiceService
  // ) {}

  ngOnInit(): void {
    console.log(this.myService.getId());
    console.log(this.myServiceInjection.getId());
  }

  onClick() {
    // If This service doesnot depend on any other service then it works fine
    // new ConsoleLoggerService().log('Button Clicked')
    // const loggerService = inject(ConsoleLoggerService)
    // loggerService.log('Button Clicked using inject')
    // with use of inject() on method we get an error
    // To resolve this we need to use runInInjectionContext
    runInInjectionContext(this.injector, () => {
      assertInInjectionContext(() => {})
      const loggerService = inject(ConsoleLoggerService)
      loggerService.log('Button Clicked using inject')
    })
  }
}
