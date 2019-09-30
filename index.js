if (localStorage.getItem("_Auth")) {
  let userName = JSON.parse(localStorage.getItem("_Auth")).name;
  document.getElementById("auth-links").classList.add("hide");
  document.getElementById("user-profile-container").classList.add("show");

  document.getElementById("logout-btn").addEventListener("click", LogOut);

  function LogOut() {
    localStorage.removeItem("_Auth");
    window.location.href = "index.html";
  }
  document.getElementById("h-userName").innerHTML = "Welcome " + userName;
}
