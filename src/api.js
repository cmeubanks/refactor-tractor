

// export function getData() {
//   let urls = [
//     'http://localhost:3001/api/v1/users',
//     'http://localhost:3001/api/v1/ingredients',
//     'http://localhost:3001/api/v1/recipes'
//   ];
//
//   let requests = urls.map(url => fetch(url))
//
//   Promise.all(requests)
//   .then(responses => {
//
//   })
// }



export function getData(userArray) {

  return fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    .then(response => response.forEach(object => userArray.push(object)))
    // .then(data => {
    //   console.log(data.map(element => element))
    //   data.map(element => element)
    // })
    .catch(error => {
      return console.log('error')
    })
  // let ingredientsData = fetch('http://localhost:3001/api/v1/ingredients')
  //     .then(response => response.json())
  //     .then(data => {
  //       data.map(element => element)
  //     })
      // .catch(error => {
      //   return console.log('error')
      // })
  // let recipeData = fetch('http://localhost:3001/api/v1/recipes')
  //     .then(response => response.json())
  //     .then(data => {
  //       data.map(element => element)
  //     })
      // .catch(error => {
      //   return console.log('error')
      // })
}
