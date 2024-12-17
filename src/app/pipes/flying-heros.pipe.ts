import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyingHeros',
  pure: false,
})
export class FlyingHerosPipe implements PipeTransform {
  transform(
    value: { name: string; canFly: boolean }[]
  ): { name: string; canFly: boolean }[] {
    return value.filter((hero) => hero.canFly);
  }
}
