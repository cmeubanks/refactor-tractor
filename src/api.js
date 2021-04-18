export function getData(dataType, array) {
  fetch(`http://localhost:3001/api/v1/${dataType}`)
    .then(response => response.json())
    .then(data => {
      data.forEach(element => {
        array.push(element)
      })
    })
    .catch(error => alert(`Sorry, there is an error: ${error}`))
}
