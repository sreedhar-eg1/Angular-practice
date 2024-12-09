import { Routes } from '@angular/router';
import { OperatorsComponent } from './pages/operators/operators.component';
import { BufferOperatorComponent } from './pages/buffer-operator/buffer-operator.component';
import { BufferCountOperatorComponent } from './pages/buffer-count-operator/buffer-count-operator.component';
import { BufferTimeOperatorComponent } from './pages/buffer-time-operator/buffer-time-operator.component';
import { BufferToggleComponent } from './pages/buffer-toggle/buffer-toggle.component';
import { BufferWhenComponent } from './pages/buffer-when/buffer-when.component';
import { TakeOperatorComponent } from './pages/take-operator/take-operator.component';
import { TakeLastOperatorComponent } from './pages/take-last-operator/take-last-operator.component';
import { TakeUntilOperatorComponent } from './pages/take-until-operator/take-until-operator.component';
import { TakeWhileOperatorComponent } from './pages/take-while-operator/take-while-operator.component';
import { SkipOperatorComponent } from './pages/skip-operator/skip-operator.component';
import { SkipLastComponent } from './pages/skip-last/skip-last.component';
import { SkipUntilComponent } from './pages/skip-until/skip-until.component';
import { SkipWhileComponent } from './pages/skip-while/skip-while.component';
import { DistinctOperatorComponent } from './pages/distinct-operator/distinct-operator.component';
import { DistinctUntilChangedOperatorComponent } from './pages/distinct-until-changed-operator/distinct-until-changed-operator.component';
import { DistictUntilKeyChangedOperatorComponent } from './pages/distict-until-key-changed-operator/distict-until-key-changed-operator.component';
import { FilterOperatorComponent } from './pages/filter-operator/filter-operator.component';
import { SampleOperatorComponent } from './pages/sample-operator/sample-operator.component';
import { AuditOperatorComponent } from './pages/audit-operator/audit-operator.component';
import { ThrottleOperatorComponent } from './pages/throttle-operator/throttle-operator.component';
import { FirstOperatorComponent } from './pages/first-operator/first-operator.component';
import { LastOperatorComponent } from './pages/last-operator/last-operator.component';
import { DebounceOperatorComponent } from './pages/debounce-operator/debounce-operator.component';
import { ElementAtOperatorComponent } from './pages/element-at-operator/element-at-operator.component';
import { IgnoreElementsOperatorComponent } from './pages/ignore-elements-operator/ignore-elements-operator.component';
import { SingleOperatorComponent } from './pages/single-operator/single-operator.component';
import { MapOperatorComponent } from './pages/map-operator/map-operator.component';
import { MapToOperatorComponent } from './pages/map-to-operator/map-to-operator.component';
import { AjaxOperatorComponent } from './pages/ajax-operator/ajax-operator.component';
import { MergeMapOperatorComponent } from './pages/merge-map-operator/merge-map-operator.component';
import { MergeMapToOperatorComponent } from './pages/merge-map-to-operator/merge-map-to-operator.component';
import { ConcatMapOperatorComponent } from './pages/concat-map-operator/concat-map-operator.component';
import { ConcatMapToOperatorComponent } from './pages/concat-map-to-operator/concat-map-to-operator.component';
import { ExhaustMapOperatorComponent } from './pages/exhaust-map-operator/exhaust-map-operator.component';
import { SwitchMapOperatorComponent } from './pages/switch-map-operator/switch-map-operator.component';
import { SwitchMapToOperatorComponent } from './pages/switch-map-to-operator/switch-map-to-operator.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { SubjectPracticeComponent } from './pages/subject-practice/subject-practice.component';
import { ColdObservableComponent } from './pages/cold-observable/cold-observable.component';
import { MulticastOperatorComponent } from './pages/multicast-operator/multicast-operator.component';
import { ShareOperatorComponent } from './pages/share-operator/share-operator.component';
import { BehaviorSubjectComponent } from './pages/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './pages/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './pages/async-subject/async-subject.component';
import { VoidSubjectComponent } from './pages/void-subject/void-subject.component';
import { PublishBehaviorOperatorComponent } from './pages/publish-behavior-operator/publish-behavior-operator.component';
import { PublishLastOperatorComponent } from './pages/publish-last-operator/publish-last-operator.component';
import { PublishReplayOperatorComponent } from './pages/publish-replay-operator/publish-replay-operator.component';
import { CatchErrorOperatorComponent } from './pages/catch-error-operator/catch-error-operator.component';
import { RetryOperatorComponent } from './pages/retry-operator/retry-operator.component';
import { RetryWhenOperatorComponent } from './pages/retry-when-operator/retry-when-operator.component';
import { CombineLatestOperatorComponent } from './pages/combine-latest-operator/combine-latest-operator.component';
import { ConcatOperatorComponent } from './pages/concat-operator/concat-operator.component';
import { ForkjoinComponent } from './pages/forkjoin/forkjoin.component';
import { MergeComponent } from './pages/merge/merge.component';
import { PartitionComponent } from './pages/partition/partition.component';
import { RaceComponent } from './pages/race/race.component';
import { ZipComponent } from './pages/zip/zip.component';
import { SchedularsComponent } from './pages/schedulars/schedulars.component';
import { SchedularImplemetationComponent } from './pages/schedular-implemetation/schedular-implemetation.component';
import { DeferComponent } from './pages/defer/defer.component';
import { RangeComponent } from './pages/range/range.component';
import { GenerateComponent } from './pages/generate/generate.component';
import { TimerComponent } from './pages/timer/timer.component';
import { CountComponent } from './pages/count/count.component';
import { MaxComponent } from './pages/max/max.component';
import { MinComponent } from './pages/min/min.component';
import { ReduceComponent } from './pages/reduce/reduce.component';
import { IsEmptyOperatorComponent } from './pages/is-empty-operator/is-empty-operator.component';
import { FindOperatorComponent } from './pages/find-operator/find-operator.component';
import { FindIndexOperatorComponent } from './pages/find-index-operator/find-index-operator.component';
import { EveryOperatorComponent } from './pages/every-operator/every-operator.component';
import { DefaultIfEmptyOperatorComponent } from './pages/default-if-empty-operator/default-if-empty-operator.component';
import { ToArrayOperatorComponent } from './pages/to-array-operator/to-array-operator.component';
import { SubscribeOnOperatorComponent } from './pages/subscribe-on-operator/subscribe-on-operator.component';
import { ObserveOnOperatorComponent } from './pages/observe-on-operator/observe-on-operator.component';
import { MaterializeOperatorComponent } from './pages/materialize-operator/materialize-operator.component';
import { DeMaterializeOperatorComponent } from './pages/de-materialize-operator/de-materialize-operator.component';
import { DelayOperatorComponent } from './pages/delay-operator/delay-operator.component';
import { CombineLatestAllOperatorComponent } from './pages/combine-latest-all-operator/combine-latest-all-operator.component';
import { ConcattAllOperatorComponent } from './pages/concatt-all-operator/concatt-all-operator.component';
import { ExhaustAllOperatorComponent } from './pages/exhaust-all-operator/exhaust-all-operator.component';
import { SwitchAllOperatorComponent } from './pages/switch-all-operator/switch-all-operator.component';
import { MergeAllOperatorComponent } from './pages/merge-all-operator/merge-all-operator.component';
import { StartsWithOperatorComponent } from './pages/starts-with-operator/starts-with-operator.component';
import { WithLatestFromOperatorComponent } from './pages/with-latest-from-operator/with-latest-from-operator.component';
import { GroupByOperatorComponent } from './pages/group-by-operator/group-by-operator.component';
import { PairWiseOperatorComponent } from './pages/pair-wise-operator/pair-wise-operator.component';
import { WindowOperatorComponent } from './pages/window-operator/window-operator.component';
import { WindowCountOperatorComponent } from './pages/window-count-operator/window-count-operator.component';
import { WindowTimeOperatorComponent } from './pages/window-time-operator/window-time-operator.component';
import { WindowToggleOperatorComponent } from './pages/window-toggle-operator/window-toggle-operator.component';
import { WindowWhenOperatorComponent } from './pages/window-when-operator/window-when-operator.component';

export const routes: Routes = [
  { path: '', redirectTo: 'operator', pathMatch: 'full' },
  {
    path: 'operator',
    component: OperatorsComponent,
    children: [
      { path: 'buffer', component: BufferOperatorComponent },
      { path: 'buffercount', component: BufferCountOperatorComponent },
      { path: 'buffertime', component: BufferTimeOperatorComponent },
      { path: 'buffertoggle', component: BufferToggleComponent },
      { path: 'bufferwhen', component: BufferWhenComponent },
      { path: 'take', component: TakeOperatorComponent },
      { path: 'takelast', component: TakeLastOperatorComponent },
      { path: 'takeuntil', component: TakeUntilOperatorComponent },
      { path: 'takewhile', component: TakeWhileOperatorComponent },
      { path: 'skip', component: SkipOperatorComponent },
      { path: 'skiplast', component: SkipLastComponent },
      { path: 'skipuntil', component: SkipUntilComponent },
      { path: 'skipwhile', component: SkipWhileComponent },
      { path: 'distinct', component: DistinctOperatorComponent },
      {
        path: 'distinctuntilchanged',
        component: DistinctUntilChangedOperatorComponent,
      },
      {
        path: 'distinctuntilkeychanged',
        component: DistictUntilKeyChangedOperatorComponent,
      },
      { path: 'filter', component: FilterOperatorComponent },
      { path: 'sample', component: SampleOperatorComponent },
      { path: 'audit', component: AuditOperatorComponent },
      { path: 'throttle', component: ThrottleOperatorComponent },
      { path: 'first', component: FirstOperatorComponent },
      { path: 'last', component: LastOperatorComponent },
      { path: 'debounce', component: DebounceOperatorComponent },
      { path: 'elementat', component: ElementAtOperatorComponent },
      { path: 'ignoreelements', component: IgnoreElementsOperatorComponent },
      { path: 'single', component: SingleOperatorComponent },
      { path: 'map', component: MapOperatorComponent },
      { path: 'mapto', component: MapToOperatorComponent },
      { path: 'ajax', component: AjaxOperatorComponent },
      { path: 'mergemap', component: MergeMapOperatorComponent },
      { path: 'mergemapto', component: MergeMapToOperatorComponent },
      { path: 'concatmap', component: ConcatMapOperatorComponent },
      { path: 'concatmapto', component: ConcatMapToOperatorComponent },
      { path: 'exhaustmap', component: ExhaustMapOperatorComponent },
      { path: 'switchtmap', component: SwitchMapOperatorComponent },
      { path: 'switchmapto', component: SwitchMapToOperatorComponent },
      { path: 'multicast', component: MulticastOperatorComponent },
      { path: 'share', component: ShareOperatorComponent },
      { path: 'publishbehavior', component: PublishBehaviorOperatorComponent },
      { path: 'publishlast', component: PublishLastOperatorComponent },
      { path: 'publishreplay', component: PublishReplayOperatorComponent },
      { path: 'retry', component: RetryOperatorComponent },
      { path: 'retrywhen', component: RetryWhenOperatorComponent },
      { path: 'combinelatest', component: CombineLatestOperatorComponent },
      { path: 'concat', component: ConcatOperatorComponent },
      { path: 'forkjoin', component: ForkjoinComponent },
      { path: 'merge', component: MergeComponent },
      { path: 'partition', component: PartitionComponent },
      { path: 'race', component: RaceComponent },
      { path: 'zip', component: ZipComponent },
      { path: 'defer', component: DeferComponent },
      { path: 'range', component: RangeComponent },
      { path: 'generate', component: GenerateComponent },
      { path: 'timer', component: TimerComponent },
      { path: 'count', component: CountComponent },
      { path: 'max', component: MaxComponent },
      { path: 'min', component: MinComponent },
      { path: 'reduce', component: ReduceComponent },
      { path: 'isempty', component: IsEmptyOperatorComponent },
      { path: 'findindex', component: FindIndexOperatorComponent },
      { path: 'find', component: FindOperatorComponent },
      { path: 'every', component: EveryOperatorComponent },
      { path: 'defaultifempty', component: DefaultIfEmptyOperatorComponent },
      { path: 'toarray', component: ToArrayOperatorComponent },
      { path: 'subscribeon', component: SubscribeOnOperatorComponent },
      { path: 'observeon', component: ObserveOnOperatorComponent },
      { path: 'materialize', component: MaterializeOperatorComponent },
      { path: 'dematerialize', component: DeMaterializeOperatorComponent },
      { path: 'delay', component: DelayOperatorComponent },
      { path: 'combinelatestall', component: CombineLatestAllOperatorComponent },
      { path: 'concatall', component: ConcattAllOperatorComponent },
      { path: 'exhaustall', component: ExhaustAllOperatorComponent },
      { path: 'switchall', component: SwitchAllOperatorComponent },
      { path: 'mergeall', component: MergeAllOperatorComponent },
      { path: 'startswith', component: StartsWithOperatorComponent },
      { path: 'withlatestfrom', component: WithLatestFromOperatorComponent },
      { path: 'groupby', component: GroupByOperatorComponent },
      { path: 'pairwise', component: PairWiseOperatorComponent },
      { path: 'window', component: WindowOperatorComponent },
      { path: 'windowcount', component: WindowCountOperatorComponent },
      { path: 'windowtime', component: WindowTimeOperatorComponent },
      { path: 'windowtoggle', component: WindowToggleOperatorComponent },
      { path: 'windowwhen', component: WindowWhenOperatorComponent },
    ],
  },
  {
    path: 'subject',
    component: SubjectComponent,
    children: [
      {
        path: 'sub',
        component: SubjectPracticeComponent,
      },
      {
        path: 'coldobservable',
        component: ColdObservableComponent,
      },
      {
        path: 'behaviorsubject',
        component: BehaviorSubjectComponent,
      },
      {
        path: 'replaysubject',
        component: ReplaySubjectComponent,
      },
      {
        path: 'asyncsubject',
        component: AsyncSubjectComponent,
      },
      {
        path: 'voidsubject',
        component: VoidSubjectComponent,
      },
    ],
  },
  {
    path: 'schedulars',
    component: SchedularsComponent,
    children:[
      {path: 'schedularimp', component: SchedularImplemetationComponent}
    ]
  }
];
