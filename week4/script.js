function auth() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email === "" && password === "") {
        alert("invalid information");

    } else {
        alert("login successfull")
        window.open("succes.html");
        return;
    }
}
