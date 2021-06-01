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

var username = localStorage.getItem("username");
var total_product_count;
var prv_product_count;

function update_count(product_input, product_count) {
    

    //localStorage.setItem(total_product_count);
    //localStorage.setItem(prv_product_count);
    
    // product_inputs food_input, product_count: food_count
    // new value from provider
    new_product_count = parseInt(document.getElementById(product_input).value);
    console.log("updating " + product_count + ": " + new_product_count);
    // current total in db
    
    firebase.database().ref("/" + "Total/" + product_count)
        .once('value', function (snapshot) {
            window.total_product_count = snapshot.val();
        total_product_count = snapshot.val();
        console.log("total_product_count " + product_count + " " + total_product_count);
    });
    console.log("total_product_count " + product_count + ": " + total_product_count);
    // current provider count in db
    
    var product_count_in_db = firebase.database().ref("/" + username + "/" + product_count);
    product_count_in_db.once('value', function (snapshot) {
        prv_product_count = snapshot.val();
        console.log("Provider Product Count " + product_count + ": " + prv_product_count);
        return prv_product_count;
    });
    console.log("update_product(): prv_product_count: " + prv_product_count);
    new_total_product = (total_product_count - prv_product_count);
    new_total_product = (new_total_product + new_product_count);

    console.log("New Product Total: " + product_count + ": " + new_total_product);

    var user_updates = firebase.database().ref("/" + username);
    var total_updates = firebase.database().ref("/Total");

    if (product_count == 'food_count') {
        user_updates.update({food_count: new_product_count});
        total_updates.update({food_count: new_total_product});
    } else if (product_count == 'medicines_count') {
        user_updates.update({medicines_count: new_product_count});
        total_updates.update({medicines_count: new_total_product});
    } else if (product_count == 'oxygen_cyl_count') {
        user_updates.update({oxygen_cyl_count: new_product_count});
        total_updates.update({oxygen_cyl_count: new_total_product});
    } else if (product_count == 'isolation_rooms_count') {
        user_updates.update({isolation_rooms_count: new_product_count});
        total_updates.update({isolation_rooms_count: new_total_product});
    }
    window.alert("Updated Successfully!");
}

function get_all_counts() {
    username = localStorage.getItem("username");
    console.log("username =" + username);
    firebase.database().ref("/" + username + "/oxygen_cyl_count").on('value', function (snapshot) {
        current_count = snapshot.val();
        console.log("get_all_counts(): current O2 count: " + current_count);
        document.getElementById("current_o2_count").innerHTML = current_count;
    });

    firebase.database().ref("/" + username + "/isolation_rooms_count").on('value', function (snapshot) {
        current_count = snapshot.val();
        console.log("get_all_counts(): current room count: " + current_count);
        document.getElementById("current_room_count").innerHTML = current_count;
    });

    firebase.database().ref("/" + username + "/medicines_count").on('value', function (snapshot) {
        current_count = snapshot.val();
        console.log("get_all_counts(): current medicines count: " + current_count);
        document.getElementById("current_medicines_count").innerHTML = current_count;
    });

    firebase.database().ref("/" + username + "/food_count").on('value', function (snapshot) {
        current_count = snapshot.val();
        console.log("get_all_counts(): current food count: " + current_count);
        document.getElementById("current_food_count").innerHTML = current_count;
    });
}
get_all_counts();
