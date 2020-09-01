import {createStore} from 'redux';
import rootReducer from './reducers/Rootreducers';

const store = createStore(rootReducer);

export default store;