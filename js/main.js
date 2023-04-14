const btnCal = document.querySelector('#cal')
const heightInput = document.querySelector('#height')
const weightInput = document.querySelector('#weight')
const output = document.querySelector('#output')
const outputIMG = document.querySelector('#outputIMG')
const result = document.querySelector('#result')

btnCal.onclick = () => {
  if (!weightInput.value || !heightInput.value) {
    alert('Please enter info height and weight')
    return
  }
  result.style.display = 'none'
  setTimeout(() => {
    result.style.display = 'block'
  }, 100)
  const bmi = (
    weightInput.value / Math.pow(heightInput.value / 100, 2)
  ).toFixed(1)
  if (bmi < 18.5) {
    output.innerHTML = `Underweight, BMI: ${bmi}`
    outputIMG.src = './img/body-1.png'
    return
  }
  if (bmi < 24.9) {
    output.innerHTML = `Normal weight, BMI: ${bmi}`
    outputIMG.src = './img/body-2.png'
    return
  }
  if (bmi < 29.9) {
    output.innerHTML = `Overweight, BMI: ${bmi}`
    outputIMG.src = './img/body-3.png'
    return
  }
  if (bmi < 34.9) {
    output.innerHTML = `Obesity grade 1, BMI: ${bmi}`
    outputIMG.src = './img/body-4.png'
    return
  }
  if (bmi < 39.9) {
    output.innerHTML = `Obesity grade 2, BMI: ${bmi}`
    outputIMG.src = './img/body-5.png'
    return
  }
  output.innerHTML = `Obesity grade 3, BMI: ${bmi}`
  outputIMG.src = './img/body-6.png'
}
