var firebaseConfig = {
    apiKey: "AIzaSyBRZICN9O5yiQM88r8GhFEdLAdy0BhebI4",
    authDomain: "cohelp-a144f.firebaseapp.com",
    databaseURL: "https://cohelp-a144f-default-rtdb.firebaseio.com",
    projectId: "cohelp-a144f",
    storageBucket: "cohelp-a144f.appspot.com",
    messagingSenderId: "850144416642",
    appId: "1:850144416642:web:fc528185ef3491e557f59b",
    measurementId: "G-MD1VHT1VXP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  

  function update_cylinders(){
      username = "user1"
      cylinders_number = document.getElementById("oxygen_cylinders_input").value;

      firebase.database().ref("user1").update({
        "oxygen_cyl_count":cylinders_number
        });
        
    
  }

  function update_medicines(){
    medicines_number = document.getElementById("medicines_input").value;

    firebase.database().ref("user1").update({
      "medicines_count":medicines_number
      });

}

function update_isrooms(){
    isrooms_number = document.getElementById("isolation_rooms_input").value;

    firebase.database().ref("user1").update({
      "isolation_rooms_count":isrooms_number
      });

}

function update_food(){
    food_number = document.getElementById("food_input").value;

    firebase.database().ref("user1").update({
      "food_count":food_number
      });

}
function get_all_counts() {

    username = localStorage.getItem("username");
    console.log("username =" + username);
    firebase.database().ref("/" + username + "/oxygen_cyl_count").on('value', function (snapshot) {
        current_count = snapshot.val();
        console.log("current O2 count: " + current_count);
        document.getElementById("current_o2_count").innerHTML = current_count;
    });
    
    firebase.database().ref("/" + username + "/isolation_rooms_count").on('value', function (snapshot) {
        current_count = snapshot.val();
        console.log("current room count: " + current_count);
        document.getElementById("current_room_count").innerHTML = current_count;
    });

    firebase.database().ref("/" + username + "/medicines_count").on('value', function (snapshot) {
        current_count = snapshot.val();
        console.log("current medicines count: " + current_count);
        document.getElementById("current_medicines_count").innerHTML = current_count;
    });

    firebase.database().ref("/" + username + "/food_count").on('value', function (snapshot) {
        current_count = snapshot.val();
        console.log("current food count: " + current_count);
        document.getElementById("current_food_count").innerHTML = current_count;
    });
}
get_all_counts();