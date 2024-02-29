let signupbtn = document.querySelector(".signupbtn");
let signInBtn = document.querySelector(".signInBtn");
let namefield = document.querySelector(".namefield");
let title = document.querySelector(".title");
let underline = document.querySelector(".underline");
let  text = document.querySelector('.text');
signInBtn.addEventListener('click',()=>{
    namefield.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    text.innerHTML = 'Lost Password ';
    signupbtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transfrom = 'translateX(35px)';
});
signupbtn.addEventListener('click',()=>{
    namefield.style.maxHeight = '60px';
    title.innerHTML = 'Sign up';
    text.innerHTML = 'password Sugestions';
    signupbtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transfrom = 'translateX(0)';
});