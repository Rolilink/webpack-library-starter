/* global describe, it, before */

import { Cat, Dog } from '../index.js';

let lib;

describe('Given an instance of my Cat library', () => {
  beforeAll(() => {
    lib = new Cat();
  });

  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).toBe('Cat');
    });
  });
});

describe('Given an instance of my Dog library', () => {
  beforeAll(() => {
    lib = new Dog();
  });

  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).toBe('Dog');
    });
  });
});
