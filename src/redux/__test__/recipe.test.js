import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import reducer, {
  setRecipe,
  setNewIngredient,
  changeRecipe,
  changeIngredient,
  changeNewIngredient,
  loadRecipe,
} from '../recipe';

jest.mock('../../services/recipes');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('recipe reducer', () => {
  const initialState = {
    id: 0,
    userId: '',
    title: '',
    category: 0,
    product: 0,
    ingredients: [
      { id: 1, ingredient: '', weight: 0 },
    ],
    newIngredient: { id: 0, ingredient: '', weight: 0 },
    description: '',
  };

  context('when state is undefined', () => {
    it('return initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  it('setRecipe', () => {
    const recipe = {
      id: 1,
      userId: '1',
      title: '마들렌',
      category: 1,
      product: 16,
      ingredients: [
        { id: 1, ingredient: '설탕', weight: 150 },
        { id: 2, ingredient: '버터', weight: 150 },
        { id: 3, ingredient: '전란', weight: 100 },
        { id: 4, ingredient: '박력분', weight: 150 },
      ],
      newIngredient: { id: 0, ingredient: '', weight: 0 },
      description: '마들렌 만드는 방법. 오븐 180도에 10분간 굽기',
    };

    const state = reducer(initialState, setRecipe(recipe));

    expect(state).toEqual(recipe);
  });

  it('setNewIngredient', () => {
    const recipe = {
      id: 0,
      userId: '',
      title: '',
      category: 0,
      product: 0,
      ingredients: [
        { id: 2, ingredient: '설탕', weight: 100 },
        { id: 1, ingredient: '', weight: 0 },
      ],
      newIngredient: { id: 0, ingredient: '', weight: 0 },
      description: '',
    };

    const state = reducer(initialState, setNewIngredient({ fields: { id: 2, ingredient: '설탕', weight: 100 } }));

    expect(state).toEqual(recipe);
  });

  it('changeRecipe', () => {
    const recipe = {
      id: 0,
      userId: '',
      title: '맛있는마들렌',
      category: 0,
      product: 0,
      ingredients: [
        { id: 1, ingredient: '', weight: 0 },
      ],
      newIngredient: { id: 0, ingredient: '', weight: 0 },
      description: '',
    };

    const state = reducer(initialState, changeRecipe({ name: 'title', value: '맛있는마들렌' }));

    expect(state).toEqual(recipe);
  });

  it('changeIngredient', () => {
    const recipe = {
      id: 0,
      userId: '',
      title: '',
      category: 0,
      product: 0,
      ingredients: [
        { id: 1, ingredient: '버터', weight: 0 },
      ],
      newIngredient: { id: 0, ingredient: '', weight: 0 },
      description: '',
    };

    const state = reducer(initialState, changeIngredient({ name: 'ingredient-1', value: '버터' }));

    expect(state).toEqual(recipe);
  });

  it('changeNewIngredient', () => {
    const recipe = {
      id: 0,
      userId: '',
      title: '',
      category: 0,
      product: 0,
      ingredients: [
        { id: 1, ingredient: '', weight: 0 },
      ],
      newIngredient: { id: 2, ingredient: '', weight: 100 },
      description: '',
    };

    const state = reducer(initialState, changeNewIngredient({ name: 'weight-2', value: 100 }));

    expect(state).toEqual(recipe);
  });
});

describe('recipe actions', () => {
  describe('loadRecipe', () => {
    it('runs setRecipe', async () => {
      const store = mockStore({});

      await store.dispatch(loadRecipe(1));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setRecipe({}));
    });
  });
});
