import { domain } from '@domain/index';

console.log('I am running!');

export const dummyFn = (): void => console.log(domain());
console.log(dummyFn());
