function loginFun() {
    let admina = {username: "admina", password: "password", role:"admin"};
    let normalo = {username: "normalo", password: "password", role:"normal"};
    let inputName = document.getElementById("username").value;
    let inputPassword = document.getElementById("password").value;

    if(admina.username===inputName && normalo.password===inputPassword) {
            document.getElementById("welcometext").innerHTML = "Hallo admina";
            document.getElementById("msfull").style.display = "block";
            document.getElementById("loginfull").style.display = "none";

    }
    if(normalo.username===inputName && normalo.password===inputPassword) {
            document.getElementById("welcometext").innerHTML = "Hallo normalo";
            document.getElementById("msfull").style.display = "block";
            document.getElementById("loginfull").style.display = "none";
    }

}

function logoutFun() {
    document.getElementById("msfull").style.display = "none";
    document.getElementById("loginfull").style.display = "flex";
}

function addFun() {
    if (document.getElementById("addform").style.display === "block") {
        document.getElementById("addform").style.display = "none"
    } else document.getElementById("addform").style.display = "block"
}

function updateFun() {
    if (document.getElementById("updateform").style.display === "block") {
        document.getElementById("updateform").style.display = "none"
    } else document.getElementById("updateform").style.display = "block"
}