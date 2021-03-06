import React from 'react';
import { Provider } from 'react-redux';
import { Rotas } from './rotas';
import { store } from './redux';

export default function App() {
  return (
    <Provider store={store}>
      <Rotas />
    </Provider>
  );
}