/* Generates the abstract agent-network artwork used on cards and case study pages */
function afArt(seed,bg,fg,ac,w,h){
  let s=seed*7919+13;const r=()=>(s=(s*9301+49297)%233280)/233280;const p=[];
  for(let k=0;k<7;k++)p.push([40+r()*(w-80),30+r()*(h-60)]);
  p.sort((a,b)=>a[0]-b[0]);
  let d='M'+p[0];
  for(let k=1;k<p.length;k++){const a=p[k-1],b=p[k];d+='C'+(a[0]+60)+','+a[1]+' '+(b[0]-60)+','+b[1]+' '+b[0]+','+b[1]}
  let o='<svg viewBox="0 0 '+w+' '+h+'" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="'+w+'" height="'+h+'" fill="'+bg+'"/>';
  for(let x=0;x<w;x+=40)o+='<line x1="'+x+'" y1="0" x2="'+x+'" y2="'+h+'" stroke="'+fg+'" stroke-opacity=".07"/>';
  for(let y=0;y<h;y+=40)o+='<line x1="0" y1="'+y+'" x2="'+w+'" y2="'+y+'" stroke="'+fg+'" stroke-opacity=".07"/>';
  o+='<circle cx="'+w*(.25+r()*.5)+'" cy="'+h*(.3+r()*.4)+'" r="'+h*.4+'" fill="none" stroke="'+fg+'" stroke-opacity=".18" stroke-width="2"/>';
  o+='<path d="'+d+'" fill="none" stroke="'+fg+'" stroke-opacity=".85" stroke-width="2.5" stroke-dasharray="3 8" stroke-linecap="round"/>';
  p.forEach((q,k)=>{const big=k%3==0;o+='<circle cx="'+q[0]+'" cy="'+q[1]+'" r="'+(big?12:7)+'" fill="'+(big?ac:bg)+'" stroke="'+(big?ac:fg)+'" stroke-width="2.5"/>'});
  return o+'</svg>';
}
document.querySelectorAll('[data-art]').forEach(el=>{
  el.innerHTML=afArt(+el.dataset.seed,el.dataset.bg,el.dataset.fg,el.dataset.ac,+(el.dataset.w||480),+(el.dataset.h||300));
});
