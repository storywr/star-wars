import { combineReducers } from 'redux';
import characters from './characters';
import films from './films';
import species from './species';
import starships from './starships';
import homeworlds from './homeworlds';

const rootReducer =  combineReducers({
  characters,
  films,
  species,
  starships,
  homeworlds
});

export default rootReducer;
