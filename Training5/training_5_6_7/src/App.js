import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './redux/Store';
import ToDoPage from './components/ToDoPage';


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <ToDoPage />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
