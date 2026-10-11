const fl=document.getElementById('filters'),grid=document.getElementById('grid');
fl.onclick=e=>{const b=e.target.closest('button');if(!b)return;
  fl.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b));
  grid.querySelectorAll('.card').forEach(c=>c.classList.toggle('hide',b.dataset.f!=='All'&&c.dataset.s!==b.dataset.f));
};
const L=[["Triage agent","sorted 212 tickets by urgency"],["Research agent","pulled order history for 38 customers"],["Billing agent","matched 1,204 invoices to purchase orders"],["Dispatch agent","re-routed 6 deliveries around a road closure"],["Review agent","flagged 3 contract clauses for a lawyer"],["Support agent","issued 41 refunds within policy"]];
const lg=document.getElementById('log');let n=0;
function tick(){const t=new Date(),hh=String(t.getHours()).padStart(2,'0')+':'+String(t.getMinutes()).padStart(2,'0');
  const row=document.createElement('div'),x=L[n++%L.length];row.innerHTML='<i>'+hh+'</i> <b>'+x[0]+'</b> '+x[1];lg.appendChild(row);
  while(lg.children.length>3)lg.removeChild(lg.firstChild)}
tick();tick();tick();setInterval(tick,2800);
