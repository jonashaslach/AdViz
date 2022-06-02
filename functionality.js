let admina = {username: "admina", password: "password", role: "admin"};
let normalo = {username: "normalo", password: "password", role: "normal"};
let person1adminprivate = {firstname: "Anna", lastname: "Ahrens", streetnr: "Adlerstraße 5", zip: "12526", city: "Berlin", country: "Deutschland", phone: "0152 2957 2937", dateofbirth: "07.04.1998", public: false}
let person2adminpublic = {firstname: "Ben", lastname: "Baumeister", streetnr: "Badstraße 3", zip: "13357", city: "Berlin", country: "Deutschland", phone: "0178 2659 6275", dateofbirth: "12.05.1994", public: "public"}
let person1normaloprivate = {firstname: "Christian", lastname: "Carstens", streetnr: "Cantorsteig 14", zip: "12105", city: "Berlin", country: "Deutschland", phone: "0152 7894 7373", dateofbirth: "01.09.1985", public: "private"}
let person2normalopublic = {firstname: "Daniel", lastname: "Diel", streetnr: "Dahnstraße 8", zip: "13403", city: "Berlin", country: "Deutschland", phone: "0152 3061 0253", dateofbirth: "03.12.1992", public: "public"}


function loginFun() {
    let inputUsername = document.getElementById("username").value;
    let inputPassword = document.getElementById("password").value;

    let initialprivatepersonadmin = document.createElement("div");
    initialprivatepersonadmin.setAttribute("id", "prs1adminprivate");
    initialprivatepersonadmin.classList.add("personlist");
    initialprivatepersonadmin.innerHTML += "<span>" + person1adminprivate.firstname + " " + person1adminprivate.lastname + "</span>";
    document.getElementById("mspl").appendChild(initialprivatepersonadmin);
    initialprivatepersonadmin.addEventListener("click", updateFunPerson1Admin);
    document.getElementById("prs1adminprivate").style.display = "none";

    let initialpublicpersonadmin = document.createElement("div");
    initialpublicpersonadmin.setAttribute("id", "prs2adminpublic");
    initialpublicpersonadmin.classList.add("personlist");
    initialpublicpersonadmin.innerHTML += "<span>" + person2adminpublic.firstname + " " + person2adminpublic.lastname + "</span>";
    document.getElementById("mspl").appendChild(initialpublicpersonadmin)
    initialpublicpersonadmin.addEventListener("click", updateFunPerson2Admin);
    document.getElementById("prs2adminpublic").style.display = "none";

    let initialprivatepersonnormalo = document.createElement("div");
    initialprivatepersonnormalo.setAttribute("id", "prs1normaloprivate");
    initialprivatepersonnormalo.classList.add("personlist");
    initialprivatepersonnormalo.innerHTML += "<span>" + person1normaloprivate.firstname + " " + person1normaloprivate.lastname + "</span>";
    document.getElementById("mspl").appendChild(initialprivatepersonnormalo);
    initialprivatepersonnormalo.addEventListener("click", updateFunPerson1Normalo);
    document.getElementById("prs1normaloprivate").style.display = "none";

    let initialpublicpersonnormalo = document.createElement("div");
    initialpublicpersonnormalo.setAttribute("id", "prs2normalopublic");
    initialpublicpersonnormalo.classList.add("personlist");
    initialpublicpersonnormalo.innerHTML += "<span>" + person2normalopublic.firstname + " " + person2normalopublic.lastname + "</span>";
    document.getElementById("mspl").appendChild(initialpublicpersonnormalo);
    initialpublicpersonnormalo.addEventListener("click", updateFunPerson2Normalo);
    document.getElementById("prs2normalopublic").style.display = "none";

    if (admina.username === inputUsername && admina.password === inputPassword) {
        document.getElementById("welcometext").innerHTML = "Hallo admina";
        document.getElementById("msfull").style.display = "block";
        document.getElementById("loginfull").style.display = "none";

        let person1admin_serialized = JSON.stringify(person1adminprivate);
        localStorage.setItem("keyPerson1admin", person1admin_serialized);
        let person1admin_deserialized = JSON.parse(localStorage.getItem("keyPerson1admin"));
        console.log(person1admin_deserialized);

        let person2admin_serialized = JSON.stringify(person2adminpublic);
        localStorage.setItem("keyPerson2admin", person2admin_serialized);
        let person2admin_deserialized = JSON.parse(localStorage.getItem("keyPerson2admin"));
        console.log(person2admin_deserialized);

         document.getElementById("prs1adminprivate").style.display = "flex";
         document.getElementById("prs2adminpublic").style.display = "flex";

    } else if (normalo.username === inputUsername && normalo.password === inputPassword) {
        document.getElementById("welcometext").innerHTML = "Hallo normalo";
        document.getElementById("msfull").style.display = "block";
        document.getElementById("loginfull").style.display = "none";

        let person1normalo_serialized = JSON.stringify(person1normaloprivate);
        localStorage.setItem("keyPerson1normalo", person1normalo_serialized);
        let person1normalo_deserialized = JSON.parse(localStorage.getItem("keyPerson1normalo"));
        console.log(person1normalo_deserialized);

        let person2normalo_serialized = JSON.stringify(person2normalopublic);
        localStorage.setItem("keyPerson2normalo", person2normalo_serialized);
        let person2normalo_deserialized = JSON.parse(localStorage.getItem("keyPerson2normalo"));
        console.log(person2normalo_deserialized);

         document.getElementById("prs1normaloprivate").style.display = "flex";
         document.getElementById("prs2normalopublic").style.display = "flex";

    } else alert("inkorrekte username/password-Kombo")
}

function logoutFun() {
    window.location.reload();
}

function showAll() {
     if (document.getElementById("welcometext").innerHTML === "Hallo admina") {
         document.getElementById("prs1normaloprivate").style.display = "flex";
         document.getElementById("prs2normalopublic").style.display = "flex";
     } else {
         document.getElementById("prs2adminpublic").style.display = "flex";
     }
}

function showMine() {
    if (document.getElementById("welcometext").innerHTML === "Hallo admina") {
        document.getElementById("prs1normaloprivate").style.display = "none";
        document.getElementById("prs2normalopublic").style.display = "none";
    } else {
        document.getElementById("prs2adminpublic").style.display = "none";
    }
}

function addFun() {
    if (document.getElementById("addform").style.display === "block") {
        document.getElementById("addform").style.display = "none"
    } else document.getElementById("addform").style.display = "block"
}

function updateFunPerson1Admin() {
    if (document.getElementById("updateform").style.display === "block") {
        document.getElementById("updateform").style.display = "none"
    } else {
        document.getElementById("updateform").style.display = "block"
        document.getElementById("inputfirstname").value = person1adminprivate.firstname;
        document.getElementById("inputlastname").value = person1adminprivate.lastname;
        document.getElementById("inputstreetnr").value = person1adminprivate.streetnr;
        document.getElementById("inputzip").value =  person1adminprivate.zip;
        document.getElementById("inputcity").value =  person1adminprivate.city;
        document.getElementById("inputcountry").value =  person1adminprivate.country;
        document.getElementById("inputphone").value =  person1adminprivate.phone;
        document.getElementById("inputdob").value =  person1adminprivate.dateofbirth;
        document.getElementById("inputvisibility").checked =  person1adminprivate.public;
    }
}

function updateFunPerson2Admin() {
    if (document.getElementById("updateform").style.display === "block") {
        document.getElementById("updateform").style.display = "none"
    } else {
        document.getElementById("updateform").style.display = "block"
        document.getElementById("inputfirstname").value = person2adminpublic.firstname;
        document.getElementById("inputlastname").value = person2adminpublic.lastname;
        document.getElementById("inputstreetnr").value = person2adminpublic.streetnr;
        document.getElementById("inputzip").value =  person2adminpublic.zip;
        document.getElementById("inputcity").value =  person2adminpublic.city;
        document.getElementById("inputcountry").value =  person2adminpublic.country;
        document.getElementById("inputphone").value =  person2adminpublic.phone;
        document.getElementById("inputdob").value =  person2adminpublic.dateofbirth;
        document.getElementById("inputvisibility").checked =  person2adminpublic.public;
    }
}

function updateFunPerson1Normalo() {
    if (document.getElementById("updateform").style.display === "block") {
        document.getElementById("updateform").style.display = "none"
    } else {
        document.getElementById("updateform").style.display = "block"
        document.getElementById("inputfirstname").value = person1normaloprivate.firstname;
        document.getElementById("inputlastname").value = person1normaloprivate.lastname;
        document.getElementById("inputstreetnr").value = person1normaloprivate.streetnr;
        document.getElementById("inputzip").value =  person1normaloprivate.zip;
        document.getElementById("inputcity").value =  person1normaloprivate.city;
        document.getElementById("inputcountry").value =  person1normaloprivate.country;
        document.getElementById("inputphone").value =  person1normaloprivate.phone;
        document.getElementById("inputdob").value =  person1normaloprivate.dateofbirth;
        document.getElementById("inputvisibility").checked =  person1normaloprivate.public;
    }
}

function updateFunPerson2Normalo() {
    if (document.getElementById("updateform").style.display === "block") {
        document.getElementById("updateform").style.display = "none"
    } else {
        document.getElementById("updateform").style.display = "block"
        document.getElementById("inputfirstname").value = person2normalopublic.firstname;
        document.getElementById("inputlastname").value = person2normalopublic.lastname;
        document.getElementById("inputstreetnr").value = person2normalopublic.streetnr;
        document.getElementById("inputzip").value =  person2normalopublic.zip;
        document.getElementById("inputcity").value =  person2normalopublic.city;
        document.getElementById("inputcountry").value =  person2normalopublic.country;
        document.getElementById("inputphone").value =  person2normalopublic.phone;
        document.getElementById("inputdob").value =  person2normalopublic.dateofbirth;
        document.getElementById("inputvisibility").checked =  person2normalopublic.public;
    }
}


function AddNew() {
    let inputFullname = document.getElementById("firstname").value + " " +document.getElementById("lastname").value;
    const newPerson = document.createElement("div");
    newPerson.classList.add("personlist");
    newPerson.innerHTML += "<span>" + inputFullname + "</span>"
    document.getElementById("mspl").appendChild(newPerson);
    //newPerson.addEventListener("click", updateFun);
}


