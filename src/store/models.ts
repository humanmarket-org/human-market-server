import { createModel } from '@rematch/core';
import u from 'immutability-helper';

export type User = {
  name: string;
  email: string;
};

export type AppState = {
  user: User;
};

export const game = createModel({
  state: {
    user: null
  },

  reducers: {
    someAction (state: AppState, payload: string) {
      return state;
    }
  },
});
