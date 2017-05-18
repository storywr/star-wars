export const fetchFilms = () => {
  return dispatch => {
    return fetch('/api/films')
      .then(response => response.json())
      .then(films => dispatch({ type: 'LOAD_FILMS_SUCCESS', films }))
      .catch(console.log)
  }
}
