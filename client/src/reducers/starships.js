export default function starshipsReducer(state = [], action) {
  switch ( action.type ) {
    case 'LOAD_STARSHIPS_SUCCESS':
      return action.starships
    default:
      return state;
  }
}
