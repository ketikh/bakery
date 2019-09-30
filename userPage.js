document.getElementById("addProduct").addEventListener("click", addProduct);

let userName;
if (localStorage.getItem("_Auth")) {
  userName = JSON.parse(localStorage.getItem("_Auth")).name;
}

function addProduct() {
  let productName = prompt("Please enter product name");
  let productCalorie = prompt("Please enter product Calorie");
  let container = document.getElementById("product-blocks");
  let div = document.createElement("div");
  div.classList.add("prod-block");
  div.innerHTML =
    "<h1>" +
    productName +
    "</h1> <div>" +
    productCalorie +
    "</div> <button type='button' class='remove-product'>remove</button>";
  container.appendChild(div);
  let obj = {
    name: productName,
    calorie: productCalorie
  };

  localStorage.setItem("_" + userName + " " + productName, JSON.stringify(obj));
}

let count = 0;
for (var key in localStorage) {
  let a = key.split(" ")[0];
  if (a === "_" + userName) {
    let container = document.getElementById("product-blocks");
    let div = document.createElement("div");
    div.classList.add("prod-block");
    container.appendChild(div);
    div.innerHTML =
      "<h1>" +
      JSON.parse(localStorage.getItem(key)).name +
      "</h1> <div>" +
      JSON.parse(localStorage.getItem(key)).calorie +
      "</div> <button type='button' class='remove-product'>remove</button>";
    container.appendChild(div);
    count++;
  }
}

function removeProduct() {
  let getKey = "_" + userName + " " + this.parentNode.children[0].textContent;
  localStorage.removeItem(getKey);
}

let cbox = document.querySelectorAll(".remove-product");

for (let i = 0; i < cbox.length; i++) {
  cbox[i].addEventListener("click", removeProduct);
}
