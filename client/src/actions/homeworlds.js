export function fetchHomeworlds(homeworlds) {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ homeworlds })
  };

  return dispatch => {
    return fetch('/api/homeworlds', request)
      .then(response => (response.json()))
      .then(homeworlds => dispatch({ type: 'LOAD_HOMEWORLDS_SUCCESS', homeworlds }))
      .catch(console.log)
  }
}
