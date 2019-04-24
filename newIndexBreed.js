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
    .then(response=>response.json()) 
    .then (responseJson =>
        displayImages(responseJson)) 
    .catch(error=>alert(`Sorry - Please enter in a Dog Breed!`, error));
    }


function getDogImages(userBreed) {
    fetch(`https://dog.ceo/api/breed/${userBreed}/images/random`)
    .then(response=>response.json()) 
    .then (responseJson =>
        displayImages(responseJson)) 
    .catch(error=>alert(`Hi - Please enter the Breed with the first letter capitalized, eg: 'Akita'`, error));
    } 


function displayImages(responseJson) {
    console.log(responseJson);
    let newHTML = " ";
    //for(let i=0; i<responseJson.message.length; i++) {  
      newHTML +=
        `<div class="new-images">        
        <img src='${responseJson.message}'>
        </div>
        `;
       //console.log(responseJson.message[i]); // Trying to get the image displayed in the Console as per assignment requirement #2.
        $('.new-images').html(newHTML);
     // } 
    $('.images-returned').removeClass('hidden');
}

  $(function() {
    console.log('App loaded! Waiting for submit!');
    userEntry();
  }
);
