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


function get_all_counts() {

    username = localStorage.getItem("username");
    console.log("username =" + username);
    firebase.database().ref("/" + username + "/oxygen_cyl_count").on('value', function (snapshot) {
        current_count = snapshot.val();
        console.log("current O2 count: " + current_count);
        document.getElementById("o2_count").innerHTML = current_count;
    });
    
    firebase.database().ref("/" + username + "/isolation_rooms_count").on('value', function (snapshot) {
        current_count = snapshot.val();
        console.log("current room count: " + current_count);
        document.getElementById("room_count").innerHTML = current_count;
    });

    firebase.database().ref("/" + username + "/medicines_count").on('value', function (snapshot) {
        current_count = snapshot.val();
        console.log("current medicines count: " + current_count);
        document.getElementById("medicines_count").innerHTML = current_count;
    });

    firebase.database().ref("/" + username + "/food_count").on('value', function (snapshot) {
        current_count = snapshot.val();
        console.log("current food count: " + current_count);
        document.getElementById("food_count").innerHTML = current_count;
    });
}
get_all_counts();

function logout(){
    window.location = "index.html";
}