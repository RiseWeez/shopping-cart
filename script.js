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

let bonusValue = 30;
let maxDiscount = 75;
let itemPrice = 100;

document.getElementById('maxDiscount').innerHTML = maxDiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
document.getElementById('itemPrice').innerHTML = itemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

let slider = document.querySelector('.range')
const thumb = document.querySelector('.slider-thumb')
const track = document.querySelector('.bonusValue-track')
let discountTrack = document.querySelector('.discount-track')

let target = document.querySelectorAll('input[type="range"]')[0];
target.max = itemPrice;
target.value = bonusValue;

const maxDiscountLable = document.querySelector('.maxDiscount__price')
maxDiscountLable.style.left = `${maxDiscount}%`

console.log(maxDiscountLable);

const updateSlider = (value) => {
  thumb.style.left = `${value}%`
  thumb.style.transform = `translate(-${value}%, -50%)`
  track.style.width = `${bonusValue}%`
  discountTrack.style.width = `${maxDiscount}%`

  if (discountTrack.style.width <= track.style.width) {
    track.style.width = `${maxDiscount}%`
  } else {
    track.style.width = `${bonusValue}%`
  }
}

slider.oninput = (e) => 
  updateSlider(e.target.value);
  
const setRangeValue = () => {
  if (bonusValue > maxDiscount) {
    updateSlider(maxDiscount)
  } else {
    updateSlider(bonusValue)
  }
}

setRangeValue()

// price math

function rangeSlide(value) {
  const priceDiff = itemPrice - value;
  document.getElementById('finalPrice').innerHTML = priceDiff.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  document.getElementById('withBonusPrice').innerHTML = priceDiff.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  if (bonusValue > maxDiscount) {
    bonusValue = maxDiscount
  }

  if (value <= bonusValue) {
    withBonusPrice.style.color = '#00a93e';
  } else {
    withBonusPrice.style.color = 'red'
  }
}

// inputs sync

const range = document.querySelector('.range');
const field = document.querySelector('.bonusValueInputInp');

field.value = bonusValue

range.addEventListener('input', function (e) {
  field.value = e.target.value;

  if (field.value > bonusValue) {
    field.value = bonusValue
  }
});

field.addEventListener('change', function (e) {
  range.value = e.target.value;
  updateSlider(e.target.value)
});

// alert text

const input = document.querySelector('.range');
let percent = Math.floor((maxDiscount / itemPrice) * 100)
let collPerc = percent + '%'
document.getElementById('collapsible-text__color').innerHTML = collPerc

window.onload = getDiscountInfo; 
 
input.addEventListener('mousemove', getDiscountInfo) 
 
function getDiscountInfo() { 
    const chosenValue = document.getElementById('onLoadResult'); 
    const currentValue = input.value; 
 
    if (currentValue > bonusValue) { 
      input.value = bonusValue;
      chosenValue.innerHTML = `Недостатньо бонусів на рахунку. Доступно ${bonusValue} бонусів`;
      setRangeValue();
    } 
 
    if (currentValue <= itemPrice && currentValue > maxDiscount) { 
        chosenValue.innerHTML = `На даний товар діє максимальна знижка в ${percent}% (${maxDiscount} грн)` 
    } else if (currentValue <= maxDiscount && currentValue > bonusValue) { 
        chosenValue.innerHTML = `Недостатньо бонусів на рахунку. Доступно ${bonusValue} бонусів` 
    } else { 
        chosenValue.innerHTML = 'Потягни повзунок та обери знижку'
    } 
}