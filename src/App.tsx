import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import Router from './router/Router';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >
      <Router />
    </PersistGate>
  </Provider>
);

export default App;
