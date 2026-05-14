function showOptions(button) {
  // find the product container this button belongs to
  const productDiv = button.closest('.product');
  const optionsDiv = productDiv.querySelector('.options');
  optionsDiv.style.display = 'block';
}

function sendWhatsApp(product, size) {
  const phone = "27745833064"; // e.g. 27712345678
  const message = `Hello, I'm interested in ${product} (${size})`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

/* this part is for the read more section */

function toggleExtraText(button) {
  const container = button.closest('.additional-product');
  const moreText = container.querySelector('.extra');

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    button.textContent = "Read less";
  } else {
    moreText.style.display = "none";
    button.textContent = "Read more...";
  }
}




/* this is for the burger menu */

const burgerBtn = document.querySelector('.burger-btn');
const navMenu = document.querySelector('.nav-menu');

burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});



function orderWhatsApp(button) {
  // find the container this button belongs to
  const container = button.closest('.additional-product');

  // get the product title and price
  const title = container.querySelector('.additional-product-title').textContent.trim();
  const price = container.querySelector('.additional-price').textContent.trim();

  // build the WhatsApp message
  const phone = "27745833064"; // e.g. 27712345678
  const message = `Hi, I'd like to order ${title} with the price of ${price}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  // open WhatsApp
  window.open(url, '_blank');
}



function toggleText(button) {
  const container = button.closest('.product');
  const moreText = container.querySelector('.more');

  if (moreText.style.display === "none") {
    moreText.style.display = "block";  // show all hidden paragraphs
    button.textContent = "Read less";
  } else {
    moreText.style.display = "none";   // hide them again
    button.textContent = "Read more...";
  }
}
