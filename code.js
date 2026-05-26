const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const div = document.querySelector(".div");
const mul = document.querySelector(".mul");
const per = document.querySelector(".per");

const result = document.querySelector(".result");

number1.value = 0;
number2.value = 0;

// if (number1.value & number2.value >= 0){
 
  add.addEventListener("click", function () {
    const num1 = number1.textContent = parseInt(number1.value)
    const num2 =  number2.textContent = parseInt(number2.value)
  result.textContent = num1 + num2;});
  
  sub.addEventListener("click", function () {
    const num1 = number1.textContent = parseInt(number1.value)
    const num2 =  number2.textContent = parseInt(number2.value)
    result.textContent = num1 - num2;});
    
    div.addEventListener("click", function () {
      const num1 = number1.textContent = parseInt(number1.value)
      const num2 =  number2.textContent = parseInt(number2.value)
      result.textContent = num1 / num2;});
      
      mul.addEventListener("click", function () {
        const num1 = number1.textContent = parseInt(number1.value)
        const num2 =  number2.textContent = parseInt(number2.value)
        result.textContent = num1 * num2;});
        
        per.addEventListener("click", function () {
          const num1 = number1.textContent = parseInt(number1.value)
          const num2 =  number2.textContent = parseInt(number2.value)
          result.textContent = num1 * (num2/100);});
        // }



let object = {
  name : 'INDIA',
  population: 1480000000,
  language: 'Hindi',
states: {
  Island: ['Lakshadweep', 'Nicobar'],
  North : ['Jammu', 'Uttakhand', 'Haryana', 'Punjab', 'Rajasthan', 'Jammu'],
  South : ['Tamilnadu', 'Karnataka'],
  West: ['Gujarat', 'Maharashtra', 'Chhattisgarh'],
  East: ['Orisa', 'Bengal', 'Bihar', 'Jharkhand'],
  NorthEast: ['Assam', 'Meghalaya', 'Sikkim', 'Manipur', {
    Name: 'Nagaland',
    Capital: 'Kohima',
    Language: ['English', 'Nagamese'],
    Population: 4100000,
}] }}
        console.log(object, object.language, object.states.North[4])
        console.log(object.states.NorthEast[4]);
  
