document.getElementById('cf').addEventListener('submit',e=>{
  e.preventDefault();const f=new FormData(e.target);
  const body='Name: '+f.get('name')+'\nCompany: '+f.get('company')+'\nEmail: '+f.get('email')+'\n\nProcess we want to automate:\n'+f.get('msg');
  document.getElementById('ok').classList.add('show');
  window.location.href='mailto:hello@agentflow.ai?subject='+encodeURIComponent('Project enquiry from '+f.get('company'))+'&body='+encodeURIComponent(body);
});
