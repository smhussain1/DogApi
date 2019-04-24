"use strict";

function userEntry() {
        $('.user-form').submit(function(event) {  
            event.preventDefault();
            let userNum = $("#dog-number").val();
            userNum = parseInt(userNum, 10);
            getDogImages(userNum);
        }
        )
}

function getDogImages(userNum) {
    fetch('https://dog.ceo/api/breeds/image/random/' + userNum) 
    .then(response=>response.json()) 
    .then (responseJson =>
        displayImages(responseJson)) 
    .catch(error=>alert('Sorry, something went wrong!-', error));
}

function displayImages(responseJson) {
    console.log(responseJson);
    let newHTML = " ";
    for(let i=0; i<responseJson.message.length; i++) {  
      newHTML +=
        `<div class="new-images">        
        <img src='${responseJson.message[i]}'>
        </div>
        `;
       console.log(responseJson.message[i]); // Trying to get the image displayed in the Console as per assignment requirement #2.
        $('.new-images').html(newHTML);
      }
    $('.images-returned').removeClass('hidden');
    
}

  $(function() {
    console.log('App loaded! Waiting for submit!');
    userEntry();
  });
