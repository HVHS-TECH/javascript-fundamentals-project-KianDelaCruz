

function getFormInput(){
    const NAME = document.getElementById("name_field");
    let username = NAME.value;
    OUTPUT.innerHTML = "<p> Your user name is " + username +"</p>";
}

const OUTPUT = document.getElementById("script.js");
OUTPUT.innerHTML = "<h2>Hi " + username + "<h2>";