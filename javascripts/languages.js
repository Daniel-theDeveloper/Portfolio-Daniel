import translation from "../i18n/translation.js";

var userLang = navigator.language.slice(0, 2);
const btnlanguage = document.querySelector(".language");

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(userLang || 'en');
});

function changelanguage() {
    if (userLang == 'en') {
        userLang = 'es';
    } else {
        userLang = 'en'
    }
    setLanguage(userLang);
}

function setLanguage(language) {
    const elements = document.querySelectorAll("[data-translate]");

    elements.forEach(element => {
        const key = element.dataset.translate;
        element.textContent = translation[language][key] || key;
    });
}

btnlanguage.addEventListener("click", changelanguage);