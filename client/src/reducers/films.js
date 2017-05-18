export default function filmsReducer(state = [], action) {
  switch ( action.type ) {
    case 'LOAD_FILMS_SUCCESS':
      return action.films
    default:
      return state;
  }
}
