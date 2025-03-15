const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const cadastro = document.getElementById('cadastro');
const login = document.getElementById('login');
const inputLogin = document.querySelector("input-username-login");
const inputSenha = document.querySelector("input-senha-login");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  
});

//função de cadastro e login
document.addEventListener("DOMContentLoaded", function () {

  const loginForm = document.getElementById("login");
  const cadastroForm = document.getElementById("cadastro");

  //login
  loginForm.addEventListener("submit", async (event) => {
      event.preventDefault(); 
      const username = document.getElementById("input-username-login").value;
      const senha = document.getElementById("input-senha-login").value;


      console.log(username);
      console.log(senha);
      const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, senha })
      });

      const data = await response.json();
      alert(data.message);

      if (response.ok) {
          window.location.href = "dashboard.html"; 
      }
  });

  //cadastro
  cadastroForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const username = cadastroForm.querySelector("input[placeholder='Username']").value;
      const email = cadastroForm.querySelector("input[placeholder='Email']").value;
      const senha = cadastroForm.querySelector("input[placeholder='Senha']").value;

      const response = await fetch("http://localhost:3000/cadastro", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email, senha })
      });

      const data = await response.json();
      alert(data.message);
  });
});
