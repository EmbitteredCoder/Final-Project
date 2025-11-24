const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const openRegister = document.getElementById("openRegister");
const openLogin = document.getElementById("openLogin");

const emailInput = document.getElementById("username");
const rememberCheck = document.getElementById("remember");

// Carregar email se salvo
window.addEventListener("load", () => {
    const savedEmail = localStorage.getItem("savedEmail");
    if (savedEmail) {
        emailInput.value = savedEmail;
        rememberCheck.checked = true;
    }
});

// Salvar email ao fazer login
loginForm.addEventListener("submit", () => {
    if (rememberCheck.checked) {
        localStorage.setItem("savedEmail", emailInput.value);
    } else {
        localStorage.removeItem("savedEmail");
    }
});

// Abrir registro
openRegister.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.add("hidden");
  registerForm.classList.remove("hidden");
});

// Voltar ao login
openLogin.addEventListener("click", (e) => {
  e.preventDefault();
  registerForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
});