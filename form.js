
let submitButton = document.getElementById("submitButton");

let verb1 = document.getElementById("verb1");
let adj1 = document.getElementById("adj1");
let noun1 = document.getElementById("noun1");
let adj2 = document.getElementById("adj2");
let monster = document.getElementById("monster");
let verb2 = document.getElementById("verb2");
let adverb1 = document.getElementById("adverb2");
let properName = document.getElementById("properName");

let insertVerb1 = document.getElementById("insertVerb1");
let insertAdj1 = document.getElementById("insertAdj1");
let insertNoun1 = document.getElementById("insertNoun1");
let insertAdj2 = document.getElementById("insertAdj2");
let insertMonster = document.getElementById("insertMonster");
let insertVerb2 = document.getElementById("insertVerb2");
let insertAdv1 = document.getElementById("insertAdverb2");
let insertProperName = document.getElementById("insertProperName");

let story = document.getElementById("story");
let form = document.getElementById("form");

story.style.display = "none";
form.style.display = "block";

function toggler() {
    story.style.display = "block";
    form.style.display = "none";
}

submitButton.addEventListener("click", toggler);


function logger() {
    console.log("Porter is awesome!");
}