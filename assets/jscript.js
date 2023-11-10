let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let reazu = document.getElementById("reasult");

function add() {
    let add = parseInt(input1.value) + parseInt(input2.value)
    reazu.innerHTML = add
}

function tafrigh() {
    let tafrigh = parseInt(input1.value) - parseInt(input2.value)
    reazu.innerHTML = tafrigh
}

function zarb() {
    let zarb1 = parseInt(input1.value) * parseInt(input2.value)
    reazu.innerHTML = zarb1
}

function taghsim() {
    let taghsim1 = parseInt(input1.value) / parseInt(input2.value)
    reazu.innerHTML = taghsim1
}

function mod() {
    let mode = parseInt(input1.value) % parseInt(input2.value)
    reazu.innerHTML = mode
}

function mosavi_mosavi() {

    parseInt(input1.value) == parseInt(input2.value) ? reazu.innerHTML = "درسته" : reazu.innerHTML = "نادرسته مساوی نیست"

}

function bozorgtar() {
    parseInt(input1.value) > parseInt(input2.value) ? reazu.innerHTML = "درسته" : reazu.innerHTML = "نادرسته بزرگتر نیست"
}

function bozorgtar_mosavi() {
    parseInt(input1.value) >= parseInt(input2.value) ? reazu.innerHTML = "درسته" : reazu.innerHTML = "نادرسته بزرگتر نیست"
}

function mosavi_mosavi_mosavi() {
    parseInt(input1.value) === parseInt(input2.value) ? reazu.innerHTML = "درسته" : reazu.innerHTML = "نادرسته مساوی نیست"
}

function not_mosavi() {

    parseInt(input1.value) != parseInt(input2.value) ? reazu.innerHTML = "درسته مساوی نیست" : reazu.innerHTML = "نادرسته مساوی هست"

}
