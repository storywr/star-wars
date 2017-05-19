export default function homeworldsReducer(state = [], action) {
  switch ( action.type ) {
    case 'LOAD_HOMEWORLDS_SUCCESS':
      return action.homeworlds
    default:
      return state;
  }
}
