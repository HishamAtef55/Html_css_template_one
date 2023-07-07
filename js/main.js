let icon  = document.querySelector('.icon');
let nav = document.querySelector('.nav')
icon.addEventListener('click', ()=>{
    if(nav.style.display== 'block'){
        nav.style.display= 'none';
    }else{
        nav.style.display= 'block';
    }

//  icon.style.transform = `rotate(${270}deg`;
})

const toTop  = document.querySelector('.to-top');
window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 100) {
        toTop.classList.add('active')
        // document.querySelector('.links').style.position = 'fixed';
    }else{
        toTop.classList.remove('active') 
    }
})