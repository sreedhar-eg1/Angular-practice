import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PostDeclarativeService } from '../../services/declarative/post-declarative.service';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject, catchError, EMPTY } from 'rxjs';

@Component({
  selector: 'app-single-post',
  imports: [AsyncPipe],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SinglePostComponent {
  private declarativePostService = inject(PostDeclarativeService);

  errorMessageSubject = new BehaviorSubject<string>('')
  errormessageAction$ = this.errorMessageSubject.asObservable()

  // errorMessage = signal('');
  // errorMessage = ''

  selectedPost$ = this.declarativePostService.singlePost$.pipe(
    catchError((error: string) => {
      // this.errorMessage.set(error);
      // this.errorMessage = error
      this.errorMessageSubject.next(error)
      return EMPTY;
    })
  );
}
