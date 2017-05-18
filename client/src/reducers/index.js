import { combineReducers } from 'redux';
import characters from './characters';
import films from './films';

const rootReducer =  combineReducers({
  characters,
  films
});

export default rootReducer;
