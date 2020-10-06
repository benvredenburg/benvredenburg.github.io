const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

/******************************************************
Arrow Functions - es6 syntactically compact alternative to a regular function expression
see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
or
https://www.w3schools.com/js/js_arrow_function.asp
******************************************************/