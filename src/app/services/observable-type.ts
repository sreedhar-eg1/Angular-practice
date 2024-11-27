import { Observer } from 'rxjs';

export class ObservableType implements Observer<number> {
  next(data: number) {
    console.log(data);
  }

  error(err: any) {
    console.log(err);
  }

  complete() {
    console.log('Completed Class based observable');
  }
}
