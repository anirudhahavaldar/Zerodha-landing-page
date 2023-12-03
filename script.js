const capital = document.getElementById('capital');
const years = document.getElementById('years');
const interest = document.getElementById('interest');
const calculate = document.getElementById('calculate');
const answer = document.getElementById('answer');
let investment = '';

calculate.addEventListener('click', () => {
  const capitalValue = capital.value.toString();
  const yearsValue = years.value;
  const interestValue = interest.value;
  if (capitalValue === '' && yearsValue === '' && interestValue === '') {
    alert('Please enter all the fields');
  }

  if (capitalValue !== '' && yearsValue !== '' && interestValue !== '') {
    investment = capitalValue * (1 + interestValue / 100) ** yearsValue;
    answer.textContent = '₹ ' + investment.toLocaleString('en-IN');
  }
});
