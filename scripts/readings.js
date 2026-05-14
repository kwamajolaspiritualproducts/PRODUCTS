function toggleText(button) {
  const text = button.previousElementSibling; // gets the paragraph above the button
  text.classList.toggle('expanded');
  
  if (text.classList.contains('expanded')) {
    button.textContent = 'Show less';
  } else {
    button.textContent = 'Show more';
  }
};


function enquireWhatsApp(button) {
  // find the container this button belongs to
  const container = button.closest('.reading');

  // get the title and price from inside that container
  const title = container.querySelector('.reading-title').textContent.trim();
  const price = container.querySelector('.reading-price span').textContent.trim();

  // build the WhatsApp message
  const phone = "27745833064"; // e.g. 27712345678
  const message = `Hi, I'd like to book for ${title} with the price of ${price}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  // open WhatsApp
  window.open(url, '_blank');
}
