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

function validate_login() {
    // Step 1: get the values of username and password from previous page
    username = document.getElementById("username").value;
    localStorage.setItem("username",username);
    password = document.getElementById("password").value;
    logintype = document.querySelector('input[name="logintype"]:checked').value;
    console.log("username provided: " + username);
    console.log("password provided: " + password);
    console.log("logintype: " + logintype);
    // Step 2: get values of password for that username from firebase
    // Step 3: compare password from previous page and from firebase
    // Step 4: If correct password, then invoke route_page(), 
    // if incorrect then go to incorrect input
    firebase.database().ref("/" + username).on('value', function (snapshot) {
        parentKey = snapshot.key;
        parentData = snapshot.val();
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; 
            pwd_from_db = childSnapshot.val();
            if (password == pwd_from_db) {
                if (logintype == "user") {
                    window.location = "user_operations.html";
                }
                else if (logintype == "service") {
                    window.location = "provider_operations.html";
                }
                else {
                    window.location = "incorrect_input.html";
                }
            } else
                window.location = "incorrect_input.html";
        });
    });
}