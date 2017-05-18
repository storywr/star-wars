export const fetchCharacters = () => {
  return dispatch => {
    return fetch('/api/characters')
      .then(response => response.json())
      .then(characters => dispatch({ type: 'LOAD_CHARACTERS_SUCCESS', characters }))
      .catch(console.log)
  }
}
