import { Component, computed, DestroyRef, effect, inject, Injector, OnDestroy, OnInit, runInInjectionContext, signal, untracked, WritableSignal } from '@angular/core';
import { outputFromObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-computed-signal',
  imports: [],
  templateUrl: './computed-signal.component.html',
  styleUrl: './computed-signal.component.scss'
})
export class ComputedSignalComponent implements OnInit, OnDestroy {
  private injector = inject(Injector)
  private destroyRef = inject(DestroyRef)

  count: WritableSignal<number> = signal(0)

  doubleCount = computed(() => this.count() * 2)

  a = signal(1)
  b = signal(2)

  name = signal('sree')

  // Another way to create effect
  loggingEffect = effect(() => {
    this.a.set(this.b() + 1)
    console.log(this.a())
  }, {manualCleanup: true})

  // Use of toSignal to convert observable to signals
  counterObservable$ = interval(1000).pipe(take(10))
  counterSignal = toSignal(this.counterObservable$, {initialValue: 0, manualCleanup: true})

  sendEmittedCounter = outputFromObservable(this.counterObservable$)

  constructor() {
    effect(() => {
      console.log(`Count is, triggered by effect ${this.count()}`)
    })
    // effects that throws error (Not reccommended)
    // effect(() => {
    //   this.a.set(this.b() + 1)
    // })

    // Using untracked to exclude some signal changes
    // one way of using untracked
    effect(() => {
      console.log(`Using untracked method to exclude particular signal changes ${this.count()} and ${untracked(this.name)}`)
    })
    // Another way of using untracked
    effect(() => {
      untracked(() => {
        console.log(`Using untracked method to exclude particular signal changes ${this.count()} and ${untracked(this.name)}`)
      })
    })

    // Cleanup function
    effect((onCleanup) => {
      console.log(`Using untracked method to exclude particular signal changes ${this.count()} and ${untracked(this.name)}`)
      onCleanup(() => {
        console.log('Logic for cleaning up')
      })
    })
  }

  ngOnInit(): void {
    // manually cleanning while using manualCleanup with toSignal()
      const subscription: Subscription = this.counterObservable$.subscribe() 
      this.destroyRef.onDestroy(() => {
        subscription.unsubscribe()
      })
  }

  onIncrement() {
    this.count.update((oldCount) => oldCount+1)
  }

  onDecrement() {
    this.count.update((oldCount) => oldCount-1)
  }

  onChangeName() {
    this.name.set('sreedhar')
  }

  onCreate() {
    // Method 1 using runInInjectionContext
    // runInInjectionContext(this.injector, () => effect(() => {
    //   console.log(`Creating effect outside the constuctor: ${this.count()}`)
    // }))

    // Method 2 without using runInInjectionContext
    effect(() => {
      console.log(`Creating effect outside the constuctor: ${this.count()}`)
    }, {injector: this.injector})
  }

  ngOnDestroy(): void {
      this.loggingEffect.destroy()
  }
}
