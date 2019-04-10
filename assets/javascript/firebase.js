$(document).ready(function () {

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAjs_sE3vpNuRZ6zkhhsklIyypUxWgBDdU",
    authDomain: "my-portfolio-2ccef.firebaseapp.com",
    databaseURL: "https://my-portfolio-2ccef.firebaseio.com",
    projectId: "my-portfolio-2ccef",
    storageBucket: "",
    messagingSenderId: "715784516282"
  };
  firebase.initializeApp(config);

  // Creates the variable to reference the database
  var database = firebase.database();

  // When the submit button is pressed the values of each field are captured and sent to Firebase
  $("#add-feedback").on("click", function (event) {
    event.preventDefault();

    // Variables equal to the value entered on the input form
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var comment = $("#msg").val().trim();
    
    // Database object showing the keys
    var newEntry = {
      name: name,
      email: email,
      comment: comment,
    };

    //  Adds the new entry details to the database
    database.ref().push(newEntry);

    // Resets the fields on the form
    $("#name").val("");
    $("#email").val("");
    $("#msg").val("");
    
  });

















});