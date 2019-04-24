"use strict";

function userEntry() {
        $('.user-form').submit(function(event) {  
            event.preventDefault();
            let userBreed = $("#dog-breed").val();
            getDogImages(userBreed);
        }
        )
}

function getDogImages(userBreed) {
    fetch('https://dog.ceo/api/breed/hound/images/random' + 'userBreed') 
    .then(response=>response.json()) 
    .then (responseJson =>
        displayImages(responseJson)) 
    .catch(error=>alert('Sorry, something went wrong!-', error));
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
      
    $('.images-returned').removeClass('hidden');
}

  $(function() {
    console.log('App loaded! Waiting for submit!');
    userEntry();
  });
