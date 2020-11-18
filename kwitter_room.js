

//firebase links

var firebaseConfig = {
    apiKey: "AIzaSyBlnKxo5FKs6yb2UhWOkDyFo9FCRph5zQU",
    authDomain: "kwiiter-project.firebaseapp.com",
    databaseURL: "https://kwiiter-project.firebaseio.com",
    projectId: "kwiiter-project",
    storageBucket: "kwiiter-project.appspot.com",
    messagingSenderId: "1047951990650",
    appId: "1:1047951990650:web:47b5b9e4f290f06d0800c3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  

function submit(){

    

    user_roomname = document.getElementById("roomname_user").value;

    if(user_roomname == ""){

        alert("Please enter a roomname or choose a roomname down below in the trending rooms to stat chatting");

    }

    else{
        firebase.database().ref("/").child(user_roomname).update({
            purpose:"new room name created"
        });
        window.location = "kwitter_page.html";
      localStorage.setItem("room_name", user_roomname);
      document.getElementById("roomname").innerHTML = "";

    }

}

user = localStorage.getItem("user_login_userID");
  document.getElementById("welcome_user").innerHTML = "Welcome  " + user;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("div_for_trending_room_from_db").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   console.log("Roomname - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
   document.getElementById("div_for_trending_room_from_db").innerHTML += row;
   });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("name", name);
    window.location = "kwitter_page.html";
}

function logout_fn(){

    localStorage.removeItem("user_login_userID");

    localStorage.removeItem("room_name")

    window.location = "index.html";

}
