const nav = document.querySelector(".nav");
const btnOpenMenu = document.querySelector(".open-menu");
const btnCloseMenu = document.querySelector(".close-menu");

const btnCV = document.querySelector(".cv");

const email = document.getElementById("email").innerHTML;
const btnEmailCopy = document.querySelector(".email-copy");

const phone = document.querySelector(".phone");
const moreInfo = document.querySelector(".more");

function toggleMenu() {
    nav.classList.toggle("ulOpened");
}

function togglePhone() {
    phone.classList.toggle("phone-straightening");
}

function viewCV() {
    window.open("src/docs/Curriculum.pdf", "Curriculum vitae", "fullscreen=yes");
    parent.opener = top;
}

const copyEmail = async () => {
    try {
        await navigator.clipboard.writeText(email);
        btnEmailCopy.classList.remove("fa-copy");
        btnEmailCopy.classList.add("fa-check");
    } catch (err) {
        alert("Error en la función, detalles: " + err);
    }
}

btnOpenMenu.addEventListener("click", toggleMenu);
btnCloseMenu.addEventListener("click", toggleMenu);

btnCV.addEventListener("click", viewCV);

btnEmailCopy.addEventListener("click", copyEmail);

moreInfo.addEventListener("click", togglePhone);