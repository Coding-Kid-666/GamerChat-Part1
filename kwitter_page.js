//YOUR FIREBASE LINKS
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyCtPJoVXSFzIkDf1frL5UtAod9CvuOOHYI",
      authDomain: "gamerchat-8898b.firebaseapp.com",
      databaseURL: "https://gamerchat-8898b-default-rtdb.firebaseio.com",
      projectId: "gamerchat-8898b",
      storageBucket: "gamerchat-8898b.appspot.com",
      messagingSenderId: "97669859706",
      appId: "1:97669859706:web:0cd811489d4f2ec3002ec3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("username");

    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0,
                purpose:"When send clicked"
          })
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         myName = message_data['name'];
         message = message_data['message'];
         likes = message_data['like'];
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
    }