////////  NOTE THIS IS FOR PERSONAL STUDY ONLY NOTHING TO DO WITH MODULE ASSIGNMENT ////////
'use strict';

const apiKey = /*your API key here*/

const searchURL = 'https://newsapi.org/v2/everything';

function formatQueryParams(params) {
  //create an array of the keys in the "params" object
  const queryItems = Object.keys(params)
    //for each of the keys in that array, create a string with the key and the key's value in the "params" object
    .map(key => `${key}=${params[key]}`) // IS THIS CAHINED TO THE PREVIOUS LINE?  IS THIS == TO '.MAP(FUNCTION(KEY) {
      // RETURN `${key}=${params[key]}`}  ?  THIS IS SAYING 'KEY=VALUE' OF THE OBJECT PARAMS, NO?  HOW DOES IT KNOW WHAT 'KEY'MEANS?
    })
  //return a string of the keys and values, separated by "&"
  return queryItems.join('&');
}

function getNews(query, maxResults=10) {
  //create the query parameters
  const params = {
    //set the "q" parameter equal to the value the user input
    q: query,
    language: "en",
  };
  //create a string with the original URL and the new parameters
  const queryString = formatQueryParams(params)
  const url = searchURL + '?' + queryString;

  console.log(url);

  const options = {
    headers: new Headers({  // WHAT DOES 'NEW' MEAN HERE?  iM NOT FAMILIAR WITH THIS FORMAT AND SYNTAX.
      "X-Api-Key": apiKey})
  };

  fetch(url, options)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}

//watch for the form submission
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    //capture the value of the user's input
    const searchTerm = $('#js-search-term').val();
    const maxResults = $('#js-max-results').val();
    getNews(searchTerm, maxResults);
  });
}

$(watchForm);