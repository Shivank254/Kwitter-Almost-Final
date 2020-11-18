
function add_user(){

    user_login_username = document.getElementById("username").value;

    if( user_login_username == ""){

        alert("Please enter your username to get registered");

    }

    else{

        localStorage.setItem("user_login_userID", user_login_username);

        window.location = "kwitter_room.html";

    }

    document.getElementById("username").innerHTML = "";

}




