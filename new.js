const body = document.querySelector('body');
const div = document.createElement('div');
div.classList.add('flex');

const img = document.createElement('img');
img.src = './images/image-product-desktop.jpg';
div.appendChild(img);

const div2 = document.createElement('div');

const p = document.createElement('p');
p.textContent = 'P E R F U M E';
div2.appendChild(p);

const h1 = document.createElement('h1');
h1.textContent = 'Gabrielle Essence Eau De Parfum';
div2.appendChild(h1);

const p2 = document.createElement('p');
p2.textContent =
  'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.';
div2.appendChild(p2);

const h2 = document.createElement('h2');
h2.textContent = '$149.99';
div2.appendChild(h2);

const p3 = document.createElement('p');
p3.textContent = '$169.99';
div2.appendChild(p3);

const div3 = document.createElement('div');

const button = document.createElement('button');
const cartImg = document.createElement('img');
cartImg.src = 'images/icon-cart.svg';
const cart = document.createElement('span');
cart.textContent = 'Add to Cart';
div2.appendChild(button);
button.appendChild(cartImg);
button.appendChild(cart);
body.appendChild(div);
div.appendChild(div2);
div.appendChild(div3);
