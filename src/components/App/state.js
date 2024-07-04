import { proxy } from 'valtio';

export const appState = proxy({
  message: 'Hello world'
});
