function validate_login() {
    // Step 1: get values of ids, username and password from previous page
    // Step 2: get values of password for that username from firebase
    // Step 3: compare password from previous page and from firebase
    // Step 4: If correct password, then invoke route_page(), if incorrect then go to incorrect input


}
function route_page() {
    logintype = document.getElementsByName("logintype").value;
    if (logintype == "user") {
        //window.location = "user_operations.html";
        window.location = "incorrect_input.html";
    } 
    else if (logintype == "provider") {
        window.location = "provider_operations.html";
    } else {
        window.location = "incorrect_input.html";
    }
}