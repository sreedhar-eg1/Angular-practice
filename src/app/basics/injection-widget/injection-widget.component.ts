import {
  Component,
  Inject,
  inject,
  InjectionToken,
  OnInit,
} from '@angular/core';
import { MyServiceService } from '../../services/my-service.service';
import { LoggerService } from '../../services/logger.service';

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

  // constructor(
  //   private myService: MyServiceService,
  //   @Inject(myServiceToken) private myServiceInjection: MyServiceService
  // ) {}

  ngOnInit(): void {
    console.log(this.myService.getId());
    console.log(this.myServiceInjection.getId());
  }
}
