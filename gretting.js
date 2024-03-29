const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function handleSubmit() {
    event.preventDefault();
    const currenValue = input.value;
    paintGreeting(currenValue);
    saveName(currenValue);
}

function askForNmae() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS)
    if (currentUser === null) {
        askForNmae();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();