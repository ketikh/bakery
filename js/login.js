document.getElementById("login-btn").addEventListener("click", LoginValid);

function LoginValid() {
  let userName = document.getElementById("userName-l").value;
  let userPassword = document.getElementById("userPassword-l").value;
  let json = JSON.parse(localStorage.getItem(userName));
  if (userName !== "" && userPassword !== "") {
    if (localStorage.getItem(userName)) {
      let getUserName = json.name;
      let getPassword = json.password;
      if (getUserName === userName && getPassword === userPassword) {
        localStorage.setItem("_Auth", JSON.stringify(json));
        window.location.href = "userPage.html";
        return true;
      } else {
        alert("Please fill correct");
      }
    } else {
      alert("This User Not Found");
    }
  } else {
    alert("Please fill fields");
  }
  return false;
}

function checkIfLogged() {
  let localStorage = localStorage.getItem("_Auth");
  if (localStorage) {
    return true;
  }
  return false;
}
