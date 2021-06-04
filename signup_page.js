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

function adduser(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    //console.log("username: " + username + " password: " + password);
    firebase.database().ref(username).set({
        "password": password,
        "oxygen_cyl_count": 0,
        "isolation_rooms_count": 0,
        "medicines_count": 0,
        "food_count": 0
    });
    window.alert("Account Created");
}