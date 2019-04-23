"use strict";

// define the function that listens for and takes the users entry and returns it
function userEntry() {
        $('.user-form').submit(function(event) {  //when the submit is made on the form
            event.preventDefault();
            let userNum = $("#dog-number").val();
            //let userNum = $(this).find('input[name="dog-number"]').val(); //WOULD THIS SYNTAX WORK?
            userNum = parseInt(userNum, 10); //convert text to integer WHY HAVE THE 10 SPECIFIED?
            getDogImages(userNum);
            //return userNum; //and returned
        }
        )
}

// define a function that passes the user number entry to the API and calls back the images
function getDogImages(userNum) {
    fetch('https://dog.ceo/api/breeds/image/random/' + userNum) //By Default, 'fetch' makes GET requests.
    // fetch(`https://dog.ceo/api/breeds/image/random/${userNum}`)
    .then(response=>response.json()) // IS THIS THE SAME AS .THEN(FUNCTION(RESPONSE) {RETURN RESPONSE.JSON()}), AND 
    // WHAT IT DOES IS TAKE THE API RESPONSE AND FORMAT IT INTO A JSON OBJECT FORMAT, CORRECT?
    .then (responseJson => // IS THE PREVIOUS LINE RESPONSE.JSON THE SAME AS RESPONSEJSON HERE?  IF NOT, WHERE DOES IT COME FROM?
        displayImages(responseJson)) // RESPONSEJSON IS AN ARRAY HERE, CORRECT?
    .catch(error=>alert('Sorry, something went wrong!-', error)); // WHAT DOES THE ERROR HERE AT THE END DO?
}


// define a function that takes the images returned and displays them on the page, and re-sets the entry input field
function displayImages(responseJson) {
    console.log(responseJson);
    let newHTML = " ";
    for(let i=0; i<responseJson.message.length; i++) {
      //let newImage = $('.new-images img').attr('src', responseJson.message[i]);
      // let newImage = $('.results-img').attr('src', responseJson.message[i]);
      newHTML +=
        `
        <div class="new-images">        
        <img src='${responseJson.message[i]}'>
        </div>
        `;
       
        $('.new-images').html(newHTML);
      }
    $('.images-returned').removeClass('hidden');
}

  $(function() {
    console.log('App loaded! Waiting for submit!');
    userEntry();
  });

  ////////////////////////////////////////////////////////////////////////



/*
function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      createImageSection();
    });
  }

/*
function runApp() {
    console.log('App loaded! Waiting for submit!');
    createImageSection();
  };

  runApp();
*/





/*
let a=2;
let b=3;
let c=1;

function tester (test, test1, test2) {
    let sum = (test+test1+test2);
    return sum;
};
console.log(tester (a, b, c));

let tester = (test, test1, test2)=>{let sum = (test+test1+test2); return sum;}
console.log(tester(a, b, c)); */