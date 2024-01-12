window.addEventListener("DOMContentLoaded", init);

let isRunning = false;
let score = 0;

function init() {
    for (var i = 1; i < 6; i++) {
        var randomTypeId = 1 + Math.floor(Math.random() * 3);
        createTargetDiv(i, randomTypeId);
    }

    document.addEventListener("keydown", keyHandler);
}

function keyHandler(event) {
    if (event.keyCode === 32) {
        if (isRunning) {
            isRunning = false;
        } else {
            isRunning = true;
            run();
        }
    }
}

function run() {
    var randomId = 1 + Math.floor(Math.random() * 5);
    showTarget(randomId);

    var timeout = 100 + Math.floor(Math.random() * 1800);

    if (isRunning){
        setTimeout(run, timeout);
    }
}

function showTarget(id){
    var element = document.getElementById("target-" + id);
    var top = 10 + Math.floor(Math.random() * 800);
    var left = 10 + Math.floor(Math.random() * 800);
    element.style.top = top + "px";
    element.style.left = left + "px";
    element.classList.remove("gd-invisible");

    var timeout = 800 + Math.floor(Math.random() * 500);
    setTimeout(hideTarget, timeout, id);
}

function hideTarget(id){
    var element = document.getElementById("target-" + id);
    element.classList.add("gd-invisible");
}

function createTargetDiv(id, typeId) {
    var element = document.createElement("div");
    element.id = "target-" + id;
    element.className = "gd-target gd-target-type-" + typeId + " gd-invisible";
    element.addEventListener("click", targetClicked);
    document.body.appendChild(element);
}

function targetClicked(event) {
    score += 10;
    console.log(score);
}
