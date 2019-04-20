import { createModel } from '@rematch/core';
import u from 'immutability-helper';

export type User = {
  name: string;
  email: string;
};

export type AppState = {
  authenticationModal: boolean;
  authentication: string;
  user: User;
};

export const game = createModel({
  state: {
    authenticationModal: false,
    authentication: null,
    user: null
  },

  reducers: {
    setAuthenticationModal: (state: AppState, open: boolean) =>
      u(state, {authenticationModal: {$set: open}}),
    setAuthenticationCredentials: (state: AppState, credentials: string) =>
      u(state, {authentication: {$set: credentials}}),
    someAction (state: AppState, payload: string) {
      return state;
    }
  },
});
