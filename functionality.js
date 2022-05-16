function loginFun() {
    let admina = {username: "admina", password: "password", role: "admin"};
    let normalo = {username: "normalo", password: "password", role: "normal"};
    let inputUsername = document.getElementById("username").value;
    let inputPassword = document.getElementById("password").value;

    if (admina.username === inputUsername && admina.password === inputPassword) {
        document.getElementById("welcometext").innerHTML = "Hallo admina";
        document.getElementById("msfull").style.display = "block";
        document.getElementById("loginfull").style.display = "none";
    } else if (normalo.username === inputUsername && normalo.password === inputPassword) {
        document.getElementById("welcometext").innerHTML = "Hallo normalo";
        document.getElementById("msfull").style.display = "block";
        document.getElementById("loginfull").style.display = "none";
    } else alert("inkorrekte username/password-Kombo")
}

function logoutFun() {
    window.location.reload();
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

function AddNew() {
    let inputFullname = document.getElementById("firstname").value + " " +document.getElementById("lastname").value;
    const newPerson = document.createElement("div");
    newPerson.classList.add("personlist");
    newPerson.innerHTML += "<span>" + inputFullname + "</span>"
    document.getElementById("mspl").appendChild(newPerson);
    newPerson.addEventListener("click", updateFun);
}

