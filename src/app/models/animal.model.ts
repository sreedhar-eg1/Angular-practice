export interface Cat {
  name: string;
  type: 'cat';
}

export interface Dog {
  name: string;
  breed?: string;
  type: 'dog';
}

export type Animal = Cat | Dog;

export const isDog = (animal: Animal): animal is Dog => {
  return (animal as Dog).breed !== undefined;
};
