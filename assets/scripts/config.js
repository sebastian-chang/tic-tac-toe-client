'use strict'

let apiUrl
const apiUrls = {
  production: 'https://tic-tac-toe-api-production.herokuapp.com',
  // development: 'http://localhost:4741'
  development: 'https://tic-tac-toe-api-production.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
