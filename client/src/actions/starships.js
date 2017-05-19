export function fetchStarships(starships) {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ starships })
  };

  return dispatch => {
    return fetch('/api/starships', request)
      .then(response => (response.json()))
      .then(starships => dispatch({ type: 'LOAD_STARSHIPS_SUCCESS', starships }))
      .catch(console.log)
  }
}
