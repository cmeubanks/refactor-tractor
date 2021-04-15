export const getData = () => {
  let userData = fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    .then(data => {
      return data
    })
    .catch(error => {
      return 'error'
    })

  let ingredientsData = fetch('http://localhost:3001/api/v1/ingredients')
      .then(response => response.json())
      .then(data => {
        return data
      })
      .catch(error => {
        return 'error'
      })

  let recipeData = fetch('http://localhost:3001/api/v1/recipes')
      .then(response => response.json())
      .then(data => {
        return data
      })
      .catch(error => {
        return 'error'
      })

  Promise.all([userData, ingredientsData, recipeData])
    .then(arrays => {
      return arrays
    })
    .catch(err => {
      return 'error'
    })
}
