const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const imagesEl = document.querySelector('#gallery');
imagesEl.classList.add('card_image');
const getImages =  images.reduce((string, item) => string +
    `<li class="list"><img src = ${item.url} alt = '${item.alt}' width = 300></li>`, '',
);

imagesEl.insertAdjacentHTML('afterbegin', getImages);
imagesEl.style.listStyleType = 'none';
imagesEl.style.margin = 'auto';
imagesEl.style.width = '550px';
console.log(imagesEl);