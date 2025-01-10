import { AfterViewInit, Component, inject, OnInit, signal, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminProfileComponent } from './basics/admin-profile/admin-profile.component';
import { UserProfileComponent } from './basics/user-profile/user-profile.component';
import {
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  NgComponentOutlet,
  PercentPipe,
  SlicePipe,
  UpperCasePipe,
} from '@angular/common';
import { HostComponent } from './basics/host/host.component';
import { ParentComponent } from './basics/parent/parent.component';
import { StylesComponent } from './basics/styles/styles.component';
import { SizerComponent } from './basics/sizer/sizer.component';
import { from, Observable } from 'rxjs';
import { GreetPipe } from './pipes/greet.pipe';
import { ExponentPipe } from './pipes/exponent.pipe';
import { FlyingHerosPipe } from './pipes/flying-heros.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { HasPermissionDirective } from './directives/has-permission.directive';
import { DynamicListDirective } from './directives/dynamic-list.directive';
import { ShowIfDirective } from './directives/show-if.directive';
import { RepeatTimesDirective } from './directives/repeat-times.directive';
import { IsDogDirective } from './directives/is-dog.directive';
import { Animal } from './models/animal.model';
import { DemoDirective } from './directives/demo.directive';
import { DemoUrl } from './models/demo.model';
import { WidgetComponent } from './basics/widget/widget.component';
import { WeatherWidgetComponent } from './basics/weather-widget/weather-widget.component';
import { DiWidgetComponent } from './basics/di-widget/di-widget.component';
import { InjectionWidgetComponent } from './basics/injection-widget/injection-widget.component';
import { DiParentComponent } from './basics/di-parent/di-parent.component';
import { DiService } from './services/di.service';
import { DiProviderViewProviderComponent } from "./basics/di-provider-view-provider/di-provider-view-provider.component";
import { VillianListComponent } from "./basics/villian-list/villian-list.component";
import { VillianService } from './services/villian.service';
import { HeroTaxReturn } from './models/heroTaxReturn.model';
import { HeroTaxComponent } from "./basics/hero-tax/hero-tax.component";
import { CarComponent } from "./basics/car/car.component";
import { SportsCarComponent } from "./basics/sports-car/sports-car.component";
import { LibCardComponent } from "./basics/lib-card/lib-card.component";
import { LibHeaderComponent } from "./basics/lib-header/lib-header.component";
import { BrowserStorageService } from './services/browser-storage.service';
import { ListComponent } from "./basics/list/list.component";
import { ComputedSignalComponent } from "./basics/computed-signal/computed-signal.component";
import { outputToObservable } from '@angular/core/rxjs-interop';
import { InputSignalsComponent } from "./basics/input-signals/input-signals.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AdminProfileComponent,
    UserProfileComponent,
    NgComponentOutlet,
    HostComponent,
    ParentComponent,
    StylesComponent,
    SizerComponent,
    AsyncPipe,
    DatePipe,
    UpperCasePipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,
    SlicePipe,
    JsonPipe,
    GreetPipe,
    ExponentPipe,
    FlyingHerosPipe,
    HighlightDirective,
    HasPermissionDirective,
    DynamicListDirective,
    ShowIfDirective,
    RepeatTimesDirective,
    IsDogDirective,
    DemoDirective,
    WidgetComponent,
    WeatherWidgetComponent,
    DiWidgetComponent,
    InjectionWidgetComponent,
    DiParentComponent,
    DiProviderViewProviderComponent,
    VillianListComponent,
    HeroTaxComponent,
    CarComponent,
    SportsCarComponent,
    LibCardComponent,
    ListComponent,
    ComputedSignalComponent,
    InputSignalsComponent
],
  // providers: [DiService],
  // When we are using host while using dependency injection, then we cant provide service in providers array, we should provide it in viewproviders array
  viewProviders: [DiService],
  providers: [VillianService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  computedSignal = viewChild<ComputedSignalComponent>('computedSignal')

  convertCounterToObservable$!: Observable<number> 

  title = 'angular-19-feature';
  fontSize = signal(24);
  userRole = signal('admin');

  todaysdate = new Date();

  heros = signal<{ name: string; canFly: boolean }[]>([]);

  isAdmin = signal(false);
  profileComponent: {
    new (): UserProfileComponent | AdminProfileComponent;
  } | null = null;

  users = [
    {
      id: 1,
      name: 'user 1',
    },
    { id: 2, name: 'user 2' },
    { id: 3, name: 'user 3' },
  ];
  altUsers = [
    {
      id: 1,
      name: 'user 1',
    },
    { id: 2, name: 'user 2' },
    { id: 3, name: 'user 3' },
  ];

  num$ = from(this.users)!;

  fillColor = signal('rgb(255, 0, 0)');
  animal = signal<Animal>({
    name: 'belumbuli',
    breed: 'rot',
    type: 'dog',
  });

  demoString = signal('Demo String');
  demoUrl = signal<DemoUrl>({
    url: 'http://localhost:5000/',
    video: false,
  });

  // villans = signal<string[]>(inject(VillianService).getVillans())
  villanService = inject(VillianService)
  villans = signal<string[]>([])

  heroTaxReturns: HeroTaxReturn[] = [
    {
      id: 1,
      name: 'Superman',
      taxAmount: 1000,
      clone: function() {
        return {...this}
      }
    },
    {
      id: 2,
      name: 'Batman',
      taxAmount: 1500,
      clone: function() {
        return {...this}
      }
    }
  ]

  getComponent() {
    return this.isAdmin() ? AdminProfileComponent : UserProfileComponent;
  }

  // With the help of lazy loading
  async getComponentUsingLazy() {
    if (this.isAdmin()) {
      const { AdminProfileComponent } = await import(
        './basics/admin-profile/admin-profile.component'
      );
      this.profileComponent = AdminProfileComponent;
    } else {
      const { UserProfileComponent } = await import(
        './basics/user-profile/user-profile.component'
      );
      this.profileComponent = UserProfileComponent;
    }
  }

  private storage = inject(BrowserStorageService)

  ngOnInit(): void {
    this.getComponentUsingLazy();
    this.villans.set(this.villanService.getVillans())
    this.storage.set('texting', 'added to storage')
  }

  ngAfterViewInit(): void {
      if (this.computedSignal()) {
        this.convertCounterToObservable$ = outputToObservable(this.computedSignal()!.sendEmittedCounter)
      }
  }

  getCounter(event: number) {
    console.log('Observable emitted value from child component: ' + event)
  }

  onAdd(heroName: string) {
    this.heros.update((oldValue) => [
      ...oldValue,
      { name: heroName, canFly: true },
    ]);
  }

  onChangeColor() {
    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;

    this.fillColor.set(`rgb(${r}, ${g}, ${b}`);
  }

  changedColor(event: string) {
    console.log(event);
  }

  onAddVillan() {
    this.villanService.addVillan('Dome')
  }
}
