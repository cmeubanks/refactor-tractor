//export to script.JS file
//JS will need to import

// export
const getData = () => {
  let userData = fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch (error =>  "error")

  let ingredientsData = fetch('http://localhost:3001/api/v1/ingredients')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log('error'))

  let recipeData = fetch('http://localhost:3001/api/v1/recipes')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log('error'))
  // return Promise.all([userData1])
  // .then((values) => {
  // console.log(values);
  // });
}

getData();
