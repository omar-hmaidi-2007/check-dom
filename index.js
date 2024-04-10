document.getElementById("button1").addEventListener("click", function() {
    var button2 = document.getElementById("button2");
    button2.parentNode.removeChild(button2);
});    

document.getElementById("button3").addEventListener("click", function() {
    var button2 = document.getElementById("button4");
    button2.parentNode.removeChild(button2);
});    


const add = document.getElementById('add');
const substract = document.getElementById('substract');
const quantity = document.getElementById('quantity');
let counter = 0;

add.addEventListener('click', function () {
  counter++;

  quantity.textContent = counter;
});

substract.addEventListener('click', function () {
  if (counter > 0) {
    counter--;
  }

  quantity.textContent = counter;
});


const heart = document.querySelector('svg');

heart.addEventListener('click', function () {
  heart.style.fill = 'blue';
});

heart.addEventListener('dblclick', function () {
  heart.style.fill = 'red';
});

const totalPrice = document.getElementById('total-price');
const prices = {
    1: 10,
    2: 30,
    3: 50,
    };
let cart = {};
      
function updateTotalPrice() {
    let sum = 0;
    for (const id in cart) {
    sum += prices[id] * cart[id];
    }
    totalPrice.textContent = `${sum.toFixed(2)}$`;
    }
      
document.addEventListener('click', function (event) {
    if (event.target.matches('.buy-button, .delete-button')) {
        const itemId = event.target.dataset.itemId;
            if (cart[itemId]) {
              cart[itemId] += (event.target.matches('.buy-button') ? 1 : -1);
              if (cart[itemId] === 0) {
                delete cart[itemId];
              }
            } else {
              cart[itemId] = (event.target.matches('.buy-button') ? 1 : 0);
            }
            updateTotalPrice();
          }
        });
      

