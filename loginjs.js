let username = document.getElementById('username');
let name = document.getElementById('name');
let lastname = document.getElementById('lastname');
let age = document.getElementById('age');

function sabt() {

    let ps = new person(username.value, name.value, lastname.value, age.value)
    let listps=[ps]
    alert(listps[0].usernameperson + "-" + listps[0].nameperson + "-" + listps[0].lastnameperson + "-" + listps[0].ageperson)
}

function person(uname, firstname, lastname, agep) {
    this.usernameperson = uname
    this.nameperson = firstname
    this.lastnameperson = lastname
    this.ageperson = agep
}