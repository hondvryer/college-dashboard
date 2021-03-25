import { Header } from './components/Header';
import './App.scss';
import { Body } from './Body';
import { rootReducer } from './reducers';

import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import { Provider } from 'react-redux'
import logger from 'redux-logger'

const store = compose(
  applyMiddleware(logger)
)(createStore)(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
