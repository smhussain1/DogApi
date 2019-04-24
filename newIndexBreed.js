"use strict";

function userEntry() {
        $('.user-form').submit(function(event) {  
            event.preventDefault();
            let userBreed = $("#dog-breed").val();
            console.log(userBreed);
            if (userBreed.indexOf(' ') >= 0){
            getTwoNameDogImages(userBreed);
            } else {
            getDogImages(userBreed);    
            }
            }
          )
}


function getTwoNameDogImages(userBreed) {
      let index = userBreed.indexOf(" ");  // Gets the first index where a space occours
      let nameOne = userBreed.substr(0, index); // Gets the first part
      let nameTwo= userBreed.substr(index + 1);  // Gets the text part
      console.log(index, nameOne, nameTwo);
      fetch(`https://dog.ceo/api/breed/${nameTwo}/${nameOne}/images/random`)
      .then(response=> {
        if (response.ok) {
          return response.json();
        }
          throw new Error(response.statusText);
      }) 
      .then(responseJson =>
        displayImages(responseJson)) 
      .catch(error=>alert('Sorry - that breed was not found!', error));
    }
/*
    fetch(url, options)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson, maxResults))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}
*/
function getDogImages(userBreed) {
      fetch(`https://dog.ceo/api/breed/${userBreed}/images/random`)
      .then(response=>{
        if (response.ok) {
          return response.json();
        }
          throw new Error(response.statusText);
      }) 
      .then(responseJson =>
        displayImages(responseJson)) 
      .catch(error=>alert('Sorry - that breed was not found!', error));
    } 


function displayImages(responseJson) {
    console.log(responseJson);
    let newHTML = " ";
    newHTML +=
      `<div class="new-images">        
      <img src='${responseJson.message}'>
      </div>
      `;
    $('.new-images').html(newHTML);
    $('.images-returned').removeClass('hidden');
}

  $(function() {
    console.log('App loaded! Waiting for submit!');
    userEntry();
  }
);
