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
    ],
  },
];
