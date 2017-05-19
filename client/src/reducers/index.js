import { combineReducers } from 'redux';
import characters from './characters';
import films from './films';
import species from './species';

const rootReducer =  combineReducers({
  characters,
  films,
  species
});

export default rootReducer;
