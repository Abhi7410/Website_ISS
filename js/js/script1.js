function change_image() {
    var x = document.getElementById('galimg')
    var str = document.getElementById('galimg').src;
    if (str.includes("1.jpeg")) {
        x.src = "../img/2.jpeg";
    } else if (str.includes("2.jpeg")) {
        x.src = "../img/3.jpeg";
    } else if (str.includes("3.jpeg")) {
        x.src = "../img/4.jpeg";
    } else if (str.includes("4.jpeg")) {
        x.src = "../img/5.jpeg";
    } else if (str.includes("5.jpeg")) {
        x.src = "../img/1.jpeg";
    } else {
        x.src = "";
    }
}
function change_imageprev() {
    var x = document.getElementById('galimg')
    var str = document.getElementById('galimg').src;
    if (str.includes("1.jpeg")) {
        x.src = "../img/5.jpeg";
    } else if (str.includes("2.jpeg")) {
        x.src = "../img/1.jpeg";
    } else if (str.includes("3.jpeg")) {
        x.src = "../img/2.jpeg";
    } else if (str.includes("4.jpeg")) {
        x.src = "../img/3.jpeg";
    } else if (str.includes("5.jpeg")) {
        x.src = "../img/4.jpeg";
    } else {
        x.src = "";
    }
}



// form//
var dict = {};
if (typeof (Storage) !== "undefined") {
    for (var key in localStorage) {
        try {
            var data = JSON.parse(localStorage.getItem(key));
            if (data.check === "ThisIsFormData") {
                document.getElementById('InsertHere').innerHTML += '<tr><td>' + data.skill + '</td><td>' + data.level +
                    '</td><td>'  + key + '</td></tr>';
            }
        } catch (err) {
            ;
        }
    }
}

function validateForm() {
    x = document.forms["skillfill"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    // var x = document.forms["skillfill"]["email"].value;
    // if (x == "") {
    //     alert("Email must be filled out");
    //     return false;
    // }
    x = document.forms["skillfill"]["skill"].value;
    if (x == "") {
        alert("Skill must be filled out");
        return false;
    }
    addData();
    reset();
    alert("Your feedback has been recorded");
    return false;
}

function addData() {
    var name = document.forms["skillfill"]["name"].value;
    var skill = document.forms["skillfill"]["skill"].value;
   
    var l = document.getElementById("level");
    var level = l.options[l.selectedIndex].text;
    var check = "ThisIsFormData";
    dict[name] = { skill, level, check };
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem(name, JSON.stringify(dict[name]));
    }
    document.getElementById('InsertHere').innerHTML += '<tr><td>' + skill + '</td><td>' + level +
        '</td><td>' + name + '</td></tr>';
}

function reset() {
    document.getElementById("name").value = "";
    document.getElementById("skill").value = "";
    // document.getElementById("email").value = "";
}





//hovering
document.getElementById("h1").onmouseover = function () { mouseOver1() };
document.getElementById("h2").onmouseover = function () { mouseOver2() };
document.getElementById("h3").onmouseover = function () { mouseOver3() };
document.getElementById("h4").onmouseover = function () { mouseOver4() };
document.getElementById("h5").onmouseover = function () { mouseOver5() };
document.getElementById("h6").onmouseover = function () { mouseOver6() };

document.getElementById("h1").onmouseout = function () { mouseOut1() };
document.getElementById("h2").onmouseout = function () { mouseOut2() };
document.getElementById("h3").onmouseout = function () { mouseOut3() };
document.getElementById("h4").onmouseout = function () { mouseOut4() };
document.getElementById("h5").onmouseout = function () { mouseOut5() };
document.getElementById("h6").onmouseout = function () { mouseOut6() };

function mouseOver1() {
    document.getElementById("h1").style.color = "lightgrey";
}

function mouseOut1() {
    document.getElementById("h1").style.color = "white";
}
function mouseOver2() {
    document.getElementById("h2").style.color = "lightgrey";
}

function mouseOut2() {
    document.getElementById("h2").style.color = "white";
}
function mouseOver3() {
    document.getElementById("h3").style.color = "lightgrey";
}

function mouseOut3() {
    document.getElementById("h3").style.color = "white";
}
function mouseOver4() {
    document.getElementById("h4").style.color = "lightgrey";
}

function mouseOut4() {
    document.getElementById("h4").style.color = "white";
}
function mouseOver5() {
    document.getElementById("h5").style.color = "lightgrey";
}

function mouseOut5() {
    document.getElementById("h5").style.color = "white";
}
function mouseOver6() {
    document.getElementById("h6").style.color = "lightgrey";
}

function mouseOut6() {
    document.getElementById("h6").style.color = "white";
}
