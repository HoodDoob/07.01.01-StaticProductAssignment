const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  console.log(data);
  data.forEach(showProduct);
}
// document.querySelector(".breadcrumbs").textContent = product.category;
// document.querySelector(".breadcrumbs2").textContent =
//   product.productdisplayname;

function showProduct(product) {
  // grab the template
  const template = document.querySelector(".template_1").content;
  // clone the template
  const copy = template.cloneNode(true);
  // change content
  copy.querySelector(".list_brand").textContent = `${product.brandname}`;
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".price").textContent = product.price + " DKK";
  copy.querySelector(".img_productlist").src =
    src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  if (product.soldout) {
    copy.querySelector(".item_productlist").classList.add("sold_out");
  }
  if (product.discount) {
    copy.querySelector(".item_productlist").classList.add("on_sale");
    copy.querySelector(".discounted_money").textContent = `NOW ${
      product.price / product.discount
    } DKK`;
    copy.querySelector(
      ".discounted_percentage"
    ).textContent = `${product.discount}%`;
  }
  // grab parent
  const parent = document.querySelector("main");
  // append
  parent.appendChild(copy);
}
/* <template class="template_1">
<div class="item_productlist on_sale">
  <img
    class="img_productlist"
    src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
    alt="Sahara Team India Fanwear Round Neck Jersey"
  />
  <h3>Shoes 1</h3>
  <p class="price">DKK 500DKK</p>
  <a href="product.html">Read More</a>
  <div class="discounted">
    <p>Now DKK 1560,-</p>
    <p>-34%</p>
  </div>
</div>
</template> */
