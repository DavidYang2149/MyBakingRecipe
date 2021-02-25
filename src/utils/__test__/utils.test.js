import {
  formatRecipe,
  isEmpty,
  isMatch,
  isNotEmpty,
  isNotMatch,
} from '../utils';
import sampleRecipes from '../../../fixtures/recipes';

test('formatRecipe', () => {
  const settings = {
    id: 1,
    data: () => ({
      ...sampleRecipes[0],
    }),
  };

  const result = formatRecipe(settings);
  expect(result).toEqual(sampleRecipes[0]);
});

describe('isEmpty', () => {
  context('with empty value', () => {
    it('return true', () => {
      expect(isEmpty('')).toBe(true);
    });
  });

  context('without empty value', () => {
    it('return false', () => {
      expect(isEmpty('1')).toBe(false);
    });
  });
});

describe('isMatch', () => {
  context('with match value', () => {
    it('return true', () => {
      expect(isMatch('1')('1')).toBe(true);
    });
  });

  context('with no match value', () => {
    it('return false', () => {
      expect(isMatch('1')('2')).toBe(false);
    });
  });
});

describe('isNotEmpty', () => {
  context('with empty value', () => {
    it('return false (reverse result)', () => {
      expect(isNotEmpty('')).toBe(false);
    });
  });

  context('without empty value', () => {
    it('return true (reverse result)', () => {
      expect(isNotEmpty('1')).toBe(true);
    });
  });
});

describe('isNotMatch', () => {
  context('with match value', () => {
    it('return false (reverse result)', () => {
      expect(isNotMatch('1')('1')).toBe(false);
    });
  });

  context('with no match value', () => {
    it('return true (reverse result)', () => {
      expect(isNotMatch('1')('2')).toBe(true);
    });
  });
});
