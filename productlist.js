const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".breadcrumbs").textContent = product.category;
  document.querySelector(".breadcrumbs2").textContent =
    product.productdisplayname;
  document.querySelector(
    ".img_productlist"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector(".img_productlist").alt = product.productdisplayname;
  document.querySelector("h3").textContent = product.productdisplayname;
  document.querySelector(".price").textContent = product.price + " DKK";
}
