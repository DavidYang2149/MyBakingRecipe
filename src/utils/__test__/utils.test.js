import {
  formatRecipe,
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
