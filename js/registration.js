document
  .getElementById("registration-btn")
  .addEventListener("click", registration);

function registration() {
  let userName = document.getElementById("userName").value;
  let userPassword = document.getElementById("userPassword").value;
  let repeatPassword = document.getElementById("repeatPassword").value;
  let userObj = {
    name: userName,
    password: userPassword
  };
  if (userName !== "" && userPassword !== "") {
    if (!localStorage.getItem(userName)) {
      if (userPassword === repeatPassword) {
        localStorage.setItem(userName, JSON.stringify(userObj));
        window.location.href = "login.html";
      } else {
        alert("Please fill correct");
      }
    } else {
      alert("This User already registered");
    }
  } else {
    alert("Please fill fields");
  }
}
