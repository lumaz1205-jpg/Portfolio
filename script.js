const menu=document.querySelector('.menu');const nav=document.querySelector('nav');
menu?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='78px';nav.style.left='0';nav.style.right='0';nav.style.padding='25px 7%';nav.style.background='#080808';nav.style.flexDirection='column';nav.style.gap='20px';});
