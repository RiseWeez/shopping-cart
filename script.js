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

let bonusValue = 40;
let maxDiscount = 60;
let itemPrice = 100;
let onLoadResult = 'Потягни повзунок та обери знижку'


document.getElementById('maxDiscount').innerHTML = maxDiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
document.getElementById('itemPrice').innerHTML = itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
document.getElementById('onLoadResult').innerHTML = onLoadResult

let slider = document.querySelector('.range')
const thumb = document.querySelector('.slider-thumb')
const track = document.querySelector('.bonus-value-track')
let discountTrack = document.querySelector('.discount-track')
discountTrack.style.width = `${maxDiscount}%`

let target = document.querySelectorAll('input[type="range"]')[0];
target.max = itemPrice;
target.value = bonusValue;


const updateSlider = (value) => {
  thumb.style.left = `${value}%`
  thumb.style.transform = `translate(-${value}%, -50%)`
  track.style.width = `${bonusValue}%`

  if (discountTrack.style.width < track.style.width) {
    track.style.width = `${maxDiscount}%`
  } else {
    track.style.width = `${bonusValue}%`
  }
}

slider.oninput = (e) => 
  updateSlider(e.target.value)

updateSlider(bonusValue) // Init value

function rangeSlide(value) {
  const priceDiff = itemPrice - value;
  document.getElementById('finalPrice').innerHTML = priceDiff.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  document.getElementById('withBonusPrice').innerHTML = priceDiff.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  if (value <= bonusValue) {
    withBonusPrice.style.color = '#00a93e';
  } else {
    withBonusPrice.style.color = 'red'
  }
}

const range = document.querySelector('.range');
const field = document.querySelector('.bonusValueInputInp');

field.value = bonusValue

range.addEventListener('change', function (e) {
  field.value = e.target.value;
});
field.addEventListener('change', function (e) {
  range.value = e.target.value;
  updateSlider(e.target.value)
});

// window.onload = function setSliderRange() {
//   let target = document.querySelectorAll('input[type="range"]')[0];
//   target.value = bonusValue;
//   let min = target.min;
//   target.max = itemPrice;

//   target.style.backgroundSize = ((bonusValue - min) * 100) / (itemPrice - min) + '% 100%';
//   target.style.backgroundColor = '#ea373785'
// };

// bonusValueInput.onchange = function changeBonusValue() {
//   let bonusValueInput = document.getElementById('bonusValueInput').value;
//   let handleValue = +bonusValueInput

//   let target = document.querySelectorAll('input[type="range"]')[0];
//   target.value = handleValue;
//   let min = 0;
//   target.max = itemPrice;

//   target.style.backgroundSize = ((bonusValue - min) * 100) / (itemPrice - min) + '% 100%'; 
// };

const input = document.querySelector('.range');
let percent = Math.floor((maxDiscount / itemPrice) * 100)
let collPerc = percent + '%'
document.getElementById('collapsible-text__color').innerHTML = collPerc

// input.addEventListener('input', overMaxDiscountFunc); 
// input.addEventListener('change', noBonusResFunc);
// input.addEventListener('input', notEnoughBonusFunc);

// function overMaxDiscountFunc() {
//   let overMaxDiscount = 'Over Max Discount'
//   const y = document.getElementById('onLoadResult');
//   if (input.value > maxDiscount && y.innerHTML === onLoadResult) {
//     y.innerHTML = overMaxDiscount;
//   } else if (input.value < maxDiscount) {
//     y.innerHTML = onLoadResult;
//   }
// }

// function noBonusResFunc() {
//   let noBonusRes = 'Your Balance is 0'
//   const x = document.getElementById('onLoadResult');
//   if (input.value == 0 && x.innerHTML === onLoadResult) {
//     x.innerHTML = noBonusRes
//   } else if (input.value !== 0) {
//     x.innerHTML = onLoadResult
//   }
// }

// function notEnoughBonusFunc() {
//   let notEnoughBonus = 'Not Enough Bonuses'
//   const z = document.getElementById('onLoadResult');
//   if (input.value > bonusValue && z.innerHTML === onLoadResult) {
//     z.innerHTML = notEnoughBonus;
//   } else if (input.value < bonusValue) {
//     z.innerHTML = onLoadResult;
//   }  
// }

input.addEventListener('change', () => {
  let overMaxDiscount = `На даний товар діє максимальна знижка в ${percent}% (${maxDiscount} грн)`
  const y = document.getElementById('onLoadResult');
  if (input.value > maxDiscount && y.innerHTML === onLoadResult) {
    y.innerHTML = overMaxDiscount;
  } else if (input.value < maxDiscount) {
    y.innerHTML = onLoadResult;
  }
});

input.addEventListener('input', () => {
  let noBonusRes = 'Зареєструйся, та отримай +50 бонусів'
  const x = document.getElementById('onLoadResult');
  if (input.value == 0 && x.innerHTML === onLoadResult) {
    x.innerHTML = noBonusRes
  } else if (input.value !== 0) {
    x.innerHTML = onLoadResult
  }
})

input.addEventListener('change', () => {
  let notEnoughBonus = `Недостатньо бонусів на рахунку. Доступно ${bonusValue} бонусів`
  const z = document.getElementById('onLoadResult');
  if (input.value > bonusValue && z.innerHTML === onLoadResult) {
    z.innerHTML = notEnoughBonus;
  } else if (input.value < bonusValue) {
    z.innerHTML = onLoadResult;
  }
})


// input.addEventListener('input', () => {
//   const x = document.getElementById('onLoadResult');

//   let overMaxDiscount = `На даний товар діє максимальна знижка в 75% (${maxDiscount} грн)`
//   if (input.value > maxDiscount && x.innerHTML === onLoadResult) {
//     x.innerHTML = overMaxDiscount;
//   } else if (input.value < maxDiscount) {
//     x.innerHTML = onLoadResult;
//   } 

//   let noBonusRes = 'Зареєструйся, та отримай +50 бонусів'
//   if (input.value == 0 && x.innerHTML === onLoadResult) {
//     x.innerHTML = noBonusRes
//   } else if (input.value !== 0) {
//     x.innerHTML = onLoadResult
//   }

//   let notEnoughBonus = `Недостатньо бонусів на рахунку. Доступно ${bonusValue}`
//   if (input.value > bonusValue && x.innerHTML === onLoadResult) {
//     x.innerHTML = notEnoughBonus;
//   } else if (input.value < bonusValue) {
//     x.innerHTML = onLoadResult;
//   }
// });

// document.querySelector('.range').removeEventListener('change', input)

