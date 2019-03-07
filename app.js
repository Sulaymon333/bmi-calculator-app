const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const form = document.querySelector('#form');
const bmiImage = document.querySelector('.bmi-image');
const bmiResult = document.querySelector('.card__bmi-result');
const bmiInfo = document.querySelectorAll('.card__bmi-range li');
const resultRibbon = document.querySelector('.result-ribbon');

document.addEventListener('DOMContentLoaded', function() {
  weight.focus();
});

form.addEventListener('submit', e => {
  if (weight.value === '' || height.value === '') {
    bmiInfo.forEach((item, index) => {
      bmiInfo[index].style.color = '#fff';
    });
    bmiResult.textContent = `Please provide a valid numeric value`;
    bmiResult.style.backgroundColor = '#28505099';
    bmiResult.style.color = '#e51212';
    bmiImage.setAttribute('src', './asset/default.jpg');
    setTimeout(() => {
      bmiResult.textContent = `See your BMI result here!`;
      bmiResult.style.color = '#fff';
    }, 3000);
    weight.value = '';
    weight.focus();
    height.value = '';
  } else {
    bmiInfo.forEach((item, index) => {
      bmiInfo[index].style.color = '#fff';
    });
    const calculatedBmiResult = weight.value / (height.value * height.value);
    if (calculatedBmiResult < 18.5) {
      bmiResult.innerHTML = `Your BMI value is <span class="result-ribbon">${calculatedBmiResult.toFixed(
        1
      )}</span>`;
      bmiImage.setAttribute('src', './asset/underweight.jpg');
      bmiResult.style.backgroundColor = '#ffc826';
      bmiInfo[0].style.color = '#ffc826';
    } else if (calculatedBmiResult >= 18.5 && calculatedBmiResult <= 24.9) {
      bmiResult.innerHTML = `Your BMI value is <span class="result-ribbon">${calculatedBmiResult.toFixed(
        1
      )}</span>`;
      bmiImage.setAttribute('src', './asset/normal.jpg');
      bmiResult.style.backgroundColor = '#40ed73';
      bmiInfo[1].style.color = '#40ed73';
    } else if (calculatedBmiResult >= 25 && calculatedBmiResult <= 29.9) {
      bmiResult.innerHTML = `Your BMI value is <span class="result-ribbon">${calculatedBmiResult.toFixed(
        1
      )}</span>`;
      bmiImage.setAttribute('src', './asset/overweight.jpg');
      bmiResult.style.backgroundColor = '#9b1f1f';
      bmiInfo[2].style.color = '#9b1f1f';
    } else if (calculatedBmiResult >= 30) {
      bmiResult.innerHTML = `Your BMI value is <span class="result-ribbon">${calculatedBmiResult.toFixed(
        1
      )}</span>`;
      console.log('BMI is', bmiResult);
      bmiImage.setAttribute('src', './asset/obese.jpg');
      bmiResult.style.backgroundColor = '#e51212';
      bmiInfo[3].style.color = '#e51212';
    }
    weight.value = '';
    weight.focus();
    height.value = '';
  }

  e.preventDefault();
});
