"use strict";

function userEntry() {
        $('.user-form').submit(function(event) {  
            event.preventDefault();
            let userBreed = $("#dog-breed").val();
            // how to format the text so that it can be read by the server??  // PROBLEM 
            console.log(userBreed);
            twoNameBreed(userBreed);
            getDogImages(userBreed, twoNameBreed);
        }
        )
}

function twoNameBreed(userBreed) {
    if(userBreed.indexOf(' ') >= 0){
      console.log("contains spaces");
      let twoNameBreed = userBreed;
      console.log(twoNameBreed);
      return twoNameBreed;
        }
      }

function getDogImages(userBreed, twoNameBreed) {
    if (userBreed) 
    {
      fetch(`https://dog.ceo/api/breed/${userBreed}/images/random`)
    .then(response=>response.json()) 
    .then (responseJson =>
        displayImages(responseJson)) 
    .catch(error=>alert(`Hi - Please enter the Breed with the first letter capitalized, eg: 'Akita'`, error));
    } else if (twoNameBreed) {
      let index = twoNameBreed.indexOf(" ");  // Gets the first index where a space occours
      let nameOne = twoNameBreed.substr(0, index); // Gets the first part
      let nameTwo= twoNameBreed.substr(index + 1);  // Gets the text part
      console.log(index, nameOne, nameTwo);
      fetch(`https://dog.ceo/api/breed/${nameTwo}/${nameOne}/images/random`)
    .then(response=>response.json()) 
    .then (responseJson =>
        displayImages(responseJson)) 
    .catch(error=>alert(`Sorry - Problem!`, error));
    }
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
