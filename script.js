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

// collapsible element
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

let bonusValue = 1000;
let maxDiscount = 1500;
let itemPrice = 2000;
let onLoadResult = 'Drag slider to get your discount'


// document.getElementById('bonusValue').innerHTML = bonusValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
document.getElementById('maxDiscount').innerHTML = maxDiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
document.getElementById('itemPrice').innerHTML = itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
document.getElementById('bonusValueInput').innerHTML = bonusValue
document.getElementById('onLoadResult').innerHTML = onLoadResult


function rangeSlide(value) {
  const priceDiff = itemPrice - value;
  // document.getElementById('selectedDiscount').innerHTML = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  // document.getElementById('discountBonusValue').innerHTML = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  document.getElementById('finalPrice').innerHTML = priceDiff.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  document.getElementById('withBonusPrice').innerHTML = priceDiff.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  // document.getElementById('selectedDiscount').style.color = '#00a93e';
  // document.getElementById('discountBonusValue').style.color = '#00a93e';

  if (value <= bonusValue) {
    withBonusPrice.style.color = '#00a93e';
  } else {
    withBonusPrice.style.color = 'red'
  }
}

window.onload = function setSliderRange() {
  let target = document.querySelectorAll('input[type="range"]')[0];
  target.value = bonusValue;
  let min = target.min;
  target.max = itemPrice;

  target.style.backgroundSize = ((bonusValue - min) * 100) / (itemPrice - min) + '% 100%';
  target.style.backgroundColor = '#ea373785'
};

bonusValueInput.onchange = function changeBonusValue() {
  let bonusValueInput = document.getElementById('bonusValueInput').value;
  // document.getElementById('bonusValue').innerHTML = bonusValueInput.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  // document.getElementById('currencyValue').innerHTML = bonusValueInput.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  // currencyValue = bonusValue;
  bonusValue = +bonusValueInput;

  let target = document.querySelectorAll('input[type="range"]')[0];
  target.value = bonusValueInput;
  let min = target.min;
  target.max = itemPrice;

  target.style.backgroundSize = ((bonusValueInput - min) * 100) / (itemPrice - min) + '% 100%'; 
};

const input = document.querySelector('.range');

input.addEventListener('input', overMaxDiscountFunc);
input.addEventListener('input', noBonusResFunc);
input.addEventListener('input', notEnoughBonusFunc);

function overMaxDiscountFunc() {
  let overMaxDiscount = 'Over Max Discount'
  const y = document.getElementById('onLoadResult');
  if (input.value > maxDiscount && y.innerHTML === onLoadResult) {
    y.innerHTML = overMaxDiscount;
  } else if (input.value < maxDiscount) {
    y.innerHTML = onLoadResult;
  }
}

function noBonusResFunc() {
  let noBonusRes = 'Your Balance is 0'
  const x = document.getElementById('onLoadResult');
  if (input.value == 0 && x.innerHTML === onLoadResult) {
    x.innerHTML = noBonusRes
  } else if (input.value !== 0) {
    x.innerHTML = onLoadResult
  }
}

function notEnoughBonusFunc() {
  let notEnoughBonus = 'Not Enough Bonuses'
  const z = document.getElementById('onLoadResult');
  if (input.value > bonusValue && z.innerHTML === onLoadResult) {
    z.innerHTML = notEnoughBonus;
  } else if (input.value < bonusValue) {
    z.innerHTML = onLoadResult;
  }  
}

// input.addEventListener('input', () => {
//   let overMaxDiscount = 'Over Max Discount'
//   const y = document.getElementById('onLoadResult');
//   if (input.value > maxDiscount && y.innerHTML === onLoadResult) {
//     y.innerHTML = overMaxDiscount;
//   } else if (input.value < maxDiscount) {
//     y.innerHTML = onLoadResult;
//   }
// });

// input.addEventListener('input', () => {
//   let noBonusRes = 'Your Balance is 0'
//   const x = document.getElementById('onLoadResult');
//   if (input.value == 0 && x.innerHTML === onLoadResult) {
//     x.innerHTML = noBonusRes
//   } else if (input.value !== 0) {
//     x.innerHTML = onLoadResult
//   }
// })

// input.addEventListener('input', () => {
//   let notEnoughBonus = 'Not Enough Bonuses'
//   const z = document.getElementById('onLoadResult');
//   if (input.value > bonusValue && z.innerHTML === onLoadResult) {
//     z.innerHTML = notEnoughBonus;
//   } else if (input.value < bonusValue) {
//     z.innerHTML = onLoadResult;
//   }
// })


// input.addEventListener('input', () => {
//   const x = document.getElementById('onLoadResult');

//   let overMaxDiscount = 'Over Max Discount'
//   if (input.value > maxDiscount && x.innerHTML === onLoadResult) {
//     x.innerHTML = overMaxDiscount;
//   } else if (input.value < maxDiscount) {
//     x.innerHTML = onLoadResult;
//   } 

//   let noBonusRes = 'Your Balance is 0'
//   if (input.value == 0 && x.innerHTML === onLoadResult) {
//     x.innerHTML = noBonusRes
//   } else if (input.value !== 0) {
//     x.innerHTML = onLoadResult
//   }

//   let notEnoughBonus = 'Not Enough Bonuses'
//   if (input.value > bonusValue && x.innerHTML === onLoadResult) {
//     x.innerHTML = notEnoughBonus;
//   } else if (input.value < bonusValue) {
//     x.innerHTML = onLoadResult;
//   }
// });

// document.querySelector('.range').removeEventListener('change', input)

