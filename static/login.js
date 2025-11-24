      const form = document.getElementById("loginForm");
      const registerForm = document.getElementById("registerForm");
      const openRegister = document.getElementById("openRegister");
      const openLogin = document.getElementById("openLogin");
      const emailInput = document.getElementById("username");
      const rememberCheck = document.getElementById("remember");

      // Preenche automaticamente se o usuário marcou antes
      window.addEventListener("load", () => {
        const savedEmail = localStorage.getItem("savedEmail");

        if (savedEmail) {
          emailInput.value = savedEmail;
          rememberCheck.checked = true;
        }
      });

      // Salvar email no localStorage
      form.addEventListener("submit", (e) => {
        e.preventDefault(); // só pra teste. Remove depois quando tiver backend

        if (rememberCheck.checked) {
          localStorage.setItem("savedEmail", emailInput.value);
        } else {
          localStorage.removeItem("savedEmail");
        }

        alert("Login enviado! (simulação)");
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

      


      // Lembrar Email
      window.addEventListener("load", () => {
        const savedEmail = localStorage.getItem("savedEmail");
        if (savedEmail) {
          emailInput.value = savedEmail;
          rememberCheck.checked = true;
        }
      });

      // Salvar email ao fazer login
      loginButton.addEventListener("click", (e) => {
        e.preventDefault(); // tira quando integrar com Flask

        if (rememberCheck.checked) {
          localStorage.setItem("savedEmail", emailInput.value);
        } else {
          localStorage.removeItem("savedEmail");
        }

        alert("Login enviado! (simulação)");
      });