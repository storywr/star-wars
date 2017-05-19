import { combineReducers } from 'redux';
import characters from './characters';
import films from './films';
import species from './species';
import starships from './starships';

const rootReducer =  combineReducers({
  characters,
  films,
  species,
  starships
});

export default rootReducer;
