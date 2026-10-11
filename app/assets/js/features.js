/* ROI calculator */
const $=id=>document.getElementById(id);
const ids=['tasks','mins','rate','auto','cur'];
function fmt(n,cur){return cur+Math.round(n).toLocaleString('en-US')}
function calc(){
  const tasks=+$('tasks').value,mins=+$('mins').value,rate=+$('rate').value,auto=+$('auto').value/100,cur=$('cur').value;
  $('tasksV').textContent=tasks.toLocaleString('en-US');$('minsV').textContent=mins+' min';$('rateV').textContent=cur+rate+'/h';$('autoV').textContent=Math.round(auto*100)+'%';
  const hours=tasks*mins/60*auto,monthly=hours*rate,annual=monthly*12;
  $('hours').textContent=Math.round(hours).toLocaleString('en-US');
  $('annual').textContent=fmt(annual,cur);
  $('monthly').textContent=fmt(monthly,cur);
  $('fte').textContent=(hours/150).toFixed(1);
}
ids.forEach(i=>$(i).addEventListener('input',calc));calc();
