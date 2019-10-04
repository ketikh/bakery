document.getElementById("addproduct").addEventListener("click", addProduct);
document
  .getElementById("change-password")
  .addEventListener("click", changePassword);
let userName;
if (localStorage.getItem("_Auth")) {
  userName = JSON.parse(localStorage.getItem("_Auth")).name;
}

function removeProduct(a) {
  a.parentNode.remove();
  let getKey = "_" + userName + " " + a.parentNode.children[1].textContent;
  localStorage.removeItem(getKey);
}

function addProduct() {
  let productName = prompt("Please enter product name");
  if (productName == "" || productName == null || productName == false) {
    alert("Name is empty, try again");
  } else {
    let productCalorie = prompt("Please enter product Calorie");
    if (
      productCalorie == "" ||
      productCalorie == null ||
      productCalorie == false
    ) {
      alert("Calorie is empty, try again");
    } else {
      let container = document.getElementById("product-blocks");
      let div = document.createElement("div");
      div.classList.add("prod-block");
      div.innerHTML =
        "<label>Product Name: </label><h1>" +
        productName +
        "</h1> <div><label>Product Calories: </label>" +
        productCalorie +
        "</div> <button type='button' class='remove-product' onclick='removeProduct(this)'><img src='images/close.png'></button>";
      container.appendChild(div);
      let obj = {
        name: productName,
        calorie: productCalorie
      };

      localStorage.setItem(
        "_" + userName + " " + productName,
        JSON.stringify(obj)
      );
    }
  }
}

for (var key in localStorage) {
  let a = key.split(" ")[0];
  if (a === "_" + userName) {
    let container = document.getElementById("product-blocks");
    let div = document.createElement("div");
    div.classList.add("prod-block");
    container.appendChild(div);
    div.innerHTML =
      "<label>Product Name: </label><h1>" +
      JSON.parse(localStorage.getItem(key)).name +
      "</h1> <div><label>Product Calories: </label>" +
      JSON.parse(localStorage.getItem(key)).calorie +
      "</div> <button type='button' class='remove-product' onclick='removeProduct(this)'><img src='images/close.png'></button>";
    container.appendChild(div);
  }
  // if (a === "_url" + userName) {
  //   let sk = localStorage.getItem("_url" + userName);
  //   document.getElementById("profile-image").src = sk;
  // }
}

function changePassword() {
  let oldPassword = document.getElementById("old-password").value;
  let newPassword = document.getElementById("new-password").value;
  let repeatNewPassword = document.getElementById("repeat-new-password").value;
  let currentPassword = JSON.parse(localStorage.getItem("_Auth")).password;
  if (oldPassword && newPassword && repeatNewPassword) {
    if (oldPassword !== currentPassword) {
      document.getElementById("old-password").classList.add("error-field");
      document.getElementById("new-password").classList.remove("error-field");
      document
        .getElementById("repeat-new-password")
        .classList.remove("error-field");
      alert("Incorrect Current Password");
    } else {
      document.getElementById("old-password").classList.remove("error-field");
      if (newPassword !== repeatNewPassword) {
        alert("Password does not match");
        document.getElementById("new-password").classList.add("error-field");
        document
          .getElementById("repeat-new-password")
          .classList.add("error-field");
      } else {
        document.getElementById("new-password").classList.remove("error-field");
        document
          .getElementById("repeat-new-password")
          .classList.remove("error-field");
        let userObj = {
          name: userName,
          password: newPassword
        };
        localStorage.setItem(userName, JSON.stringify(userObj));
        localStorage.setItem("_Auth", JSON.stringify(userObj));
        alert("Password Change");
        document.getElementById("change-password-form").reset();
      }
    }
  } else {
    alert("Please fill fields");
    if (!oldPassword) {
      document.getElementById("old-password").classList.add("error-field");
    } else {
      document.getElementById("old-password").classList.remove("error-field");
    }
    if (!newPassword) {
      document.getElementById("new-password").classList.add("error-field");
    } else {
      document.getElementById("new-password").classList.remove("error-field");
    }
    if (!repeatNewPassword) {
      document
        .getElementById("repeat-new-password")
        .classList.add("error-field");
    } else {
      document
        .getElementById("repeat-new-password")
        .classList.remove("error-field");
    }
  }
}
document
  .getElementById("image-upload-btn")
  .addEventListener("change", changeProfilePicture);

function changeProfilePicture(event) {
  var output = document.getElementById("profile-image");
  output.src = URL.createObjectURL(event.target.files[0]);
  localStorage.setItem("_url" + userName, output.src);
}
