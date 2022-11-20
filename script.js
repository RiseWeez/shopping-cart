// modal
const modal = document.getElementById('cartModal');

const btn = document.getElementById('buyButton');

const span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// collapsible slider
const coll = document.getElementsByClassName('collapsible');
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    let content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
}

// range slider

let bonusValue = 500;
let maxDiscount = 1498;
let itemPrice = 1499;
// let currencyValue = bonusValue;

document.getElementById('bonusValue').innerHTML = bonusValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
// document.getElementById('currencyValue').innerHTML = currencyValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
document.getElementById('maxDiscount').innerHTML = maxDiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
document.getElementById('itemPrice').innerHTML = itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

function rangeSlide(value) {
  const priceDiff = itemPrice - value;
  // document.getElementById('selectedDiscount').innerHTML = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  // document.getElementById('discountBonusValue').innerHTML = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  document.getElementById('finalPrice').innerHTML = priceDiff.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  document.getElementById('withBonusPrice').innerHTML = priceDiff.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  // document.getElementById('selectedDiscount').style.color = '#00a93e';
  // document.getElementById('discountBonusValue').style.color = '#00a93e';

  if (value > bonusValue) {
    withBonusPrice.style.color = '#00a93e';
  }
}

window.onload = function setSliderRange() {
  let target = document.querySelectorAll('input[type="range"]')[0];
  target.value = bonusValue;
  let min = target.min;
  target.max = itemPrice;

  target.style.backgroundSize = ((bonusValue - min) * 100) / (itemPrice - min) + '% 100%';
};

// bonusValueInput.onchange = function changeBonusValue() {
//   let bonusValueInput = document.getElementById('bonusValueInput').value;
//   document.getElementById('bonusValue').innerHTML = bonusValueInput.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
//   // document.getElementById('currencyValue').innerHTML = bonusValueInput.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
//   // currencyValue = bonusValue;
//   bonusValue = +bonusValueInput;

//   let target = document.querySelectorAll('input[type="range"]')[0];
//   target.value = bonusValueInput;
//   let min = target.min;
//   target.max = maxDiscount;

//   target.style.backgroundSize = ((bonusValueInput - min) * 100) / (maxDiscount - min) + '% 100%';
// };

const input = document.querySelector('.range');

input.addEventListener('change', () => {
  if (input.value > bonusValue) input.value = bonusValue;
});
