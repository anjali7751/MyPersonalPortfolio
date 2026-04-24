// SECTION SWITCH
function showSection(id) {
    document.querySelectorAll(".section").forEach(sec => {
        sec.classList.remove("active");
    });

    setTimeout(() => {
        document.getElementById(id).classList.add("active");
    }, 100);
}

// TYPING EFFECT
const textArray = ["Web Developer", "Java Programmer", "Frontend Developer"];
let i = 0, j = 0, current = "";

function type() {
    if (j < textArray[i].length) {
        current += textArray[i][j];
        document.getElementById("typing").innerHTML = current;
        j++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (j > 0) {
        current = current.slice(0, -1);
        document.getElementById("typing").innerHTML = current;
        j--;
        setTimeout(erase, 50);
    } else {
        i = (i + 1) % textArray.length;
        setTimeout(type, 200);
    }
}

document.addEventListener("DOMContentLoaded", type);

// DARK MODE
document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("dark-mode");
};

// CONTACT FORM
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message Sent Successfully!");
});