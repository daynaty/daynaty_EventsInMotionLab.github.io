function showAlert() {
    alert("Welcome to my Lab 2: Events in Motion Webpage!")
}

function changeStyle() {
    document.getElementById ("changeStyle").style.fontFamily = "Franklin Gothic Medium";
    document.getElementById ("changeStyle").style.fontSize = "30px";
    document.getElementById ("changeStyle").style.color = "brown";
    document.getElementById ("changeStyle").innerHTML = "This is my lab that shows a few different changes to my webpage using JavaScript. "
}

document.getElementById("dateTime").addEventListener("click", displayDate);

function displayDate () {
    document.getElementById("demo").innerHTML = Date();
}

function changeImage () {
    document.getElementById("toChange").src = "trees.jpg"
}