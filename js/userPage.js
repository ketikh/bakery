document.getElementById("addproduct").addEventListener("click", addProduct);

let userName;
if (localStorage.getItem("_Auth")) {
  userName = JSON.parse(localStorage.getItem("_Auth")).name;
}

function removeProduct(a) {
  a.parentNode.remove();
  let getKey = "_" + userName + " " + a.parentNode.children[0].textContent;
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
        "</div> <button type='button' class='remove-product' onclick='removeProduct(this)'><img src='/images/close.png'></button>";
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

let count = 0;
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
      "</div> <button type='button' class='remove-product' onclick='removeProduct(this)'><img src='/images/close.png'></button>";
    container.appendChild(div);
    count++;
  }
}
//let cbox = document.querySelectorAll(".remove-product");

// for (let i = 0; i < cbox.length; i++) {
//   cbox[i].addEventListener("click", removeProduct);
// }
