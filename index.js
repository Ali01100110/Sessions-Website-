let monday = document.getElementById('mon');
let tuesday = document.getElementById('tue');
let wednesday = document.getElementById('wed');
let thursday = document.getElementById('thu');
let friday = document.getElementById('fri');
let saturday = document.getElementById('sat');
let sunday = document.getElementById('sun');



const date = new Date();
let today = date.getDay();


const days = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];
days[today].style.color = '#0d4399';
days[today].style.border = '3px solid #0d4399';

const todayYear = new Date().getFullYear();
const todayMonth = new Date().getMonth() + 1;
const todayDay = new Date().getDate();
document.getElementById('date').innerHTML = `${todayDay} - ${todayMonth} - ${todayYear}`;




function copyFun() {
    navigator.clipboard.writeText(520240093);
  }
   

let monday1 = document.getElementById('hmon');
let tuesday1 = document.getElementById('htue');
let wednesday1 = document.getElementById('hwed');
let thursday1 = document.getElementById('hthu');
let friday1 = document.getElementById('hfri');
let saturday1 = document.getElementById('hsat');
let sunday1 = document.getElementById('hsun');


const days1 = [sunday1, monday1, tuesday1, wednesday1, thursday1, friday1, saturday1];
days1[today].style.color = '#0d4399';
days1[today].style.border = '3px solid #0d4399';