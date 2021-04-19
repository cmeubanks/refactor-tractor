export function getData(endpoint) {

  return fetch(`http://localhost:3001/api/v1/${endpoint}`)
    .then(response => response.json())
    .catch(error => {
      return console.log('error')
    })
}

export function postData(userID, ingredientID, amount) {
  return fetch('http://localhost:3001/api/v1/users', {
    method: 'POST',
    body: JSON.stringify({
      userID: `${userID}`,
      ingredientID: `${ingredientID}`,
      ingredientModification: `${amount}`
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .catch(error => {
    return console.log('error')
  })
}
