export default function speciesReducer(state = [], action) {
  switch ( action.type ) {
    case 'LOAD_SPECIES_SUCCESS':
      return action.species
    default:
      return state;
  }
}
