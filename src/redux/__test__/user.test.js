import reducer, {
  setUser,
  clearUser,
} from '../user';

describe('user reducer', () => {
  const initialState = {
    userId: '',
    displayName: '',
  };

  context('when previous state is undefined', () => {
    it('return initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setUser', () => {
    it('update user', () => {
      const user = {
        userId: 'testId',
        displayName: '',
      };

      const state = reducer(initialState, setUser({ name: 'userId', value: 'testId' }));

      expect(state).toEqual(user);
    });
  });

  describe('clearUser', () => {
    it('update user', () => {
      const user = {
        userId: 'testId',
        displayName: 'testUserName',
      };

      const state = reducer(user, clearUser());

      expect(state).toEqual(initialState);
    });
  });
});
