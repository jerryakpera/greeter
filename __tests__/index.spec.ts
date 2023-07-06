const logSpy = jest.spyOn(console, 'log');

import { helloWorld } from '../src/index';

describe('module tests', () => {
  it('tests module is function', () => {
    expect(typeof helloWorld).toBe('function');
  });
});

describe('helloWorld()', () => {
  helloWorld();

  it('test log', () => {
    expect(logSpy).toHaveBeenCalledWith('Hello stranger from this npm package');
  });
});

describe('helloWorld(name)', () => {
  helloWorld('Jerry');

  it('test log', () => {
    expect(logSpy).toHaveBeenCalledWith('Hello Jerry from this npm package');
  });
});
