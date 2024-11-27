import { Observable } from 'rxjs';

//Using function we can return only one thing
export function functionObs() {
  console.log('function type observable');
  return '1';
}

// Here functionObs is a synchronous process, if we use observable then it will be asynchronous
//Here we can return multiple thing with the help of observer.next()
export const funcObservable = new Observable((observer) => {
  console.log('observable');
  observer.next(1);
  setTimeout(() => {
    observer.next(2);
  }, 2000);
  observer.next(3);
});

// Here both yields same result even though funcObservable is asynchronous
