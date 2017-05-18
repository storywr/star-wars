export default function charactersReducer(state = [], action) {
  switch ( action.type ) {
    case 'LOAD_CHARACTERS_SUCCESS':
      return action.characters
    default:
      return state;
  }
}
