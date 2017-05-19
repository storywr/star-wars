export function fetchSpecies(species) {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ species })
  };

  return dispatch => {
    return fetch('/api/species', request)
      .then(response => (response.json()))
      .then(species => dispatch({ type: 'LOAD_SPECIES_SUCCESS', species }))
      .catch(console.log)
  }
}
