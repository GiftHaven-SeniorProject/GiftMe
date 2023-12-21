console.log("This is a message from the gifthaven javascript file!")

//TO DO
//try and input values in the textbox and retrieve them
//later...create logic and checks to see if username and password exists in the Gifting World Database

//Action when log in button is clicked
function login_creds(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    document.getElementById('output').innerHTML = 
    alert("Email:" + email + "\nPassword: " + password);
}
