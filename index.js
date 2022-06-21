var email = document.querySelector('.email');
var password = document.querySelector('.password');
var checkbox = document.querySelector('.checkbox');
var btn = document.querySelector('.btn');
var form = document.querySelector('.form');
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

 const isEmpty = () => {


    if(email.value  && password.value){
        btn.removeAttribute("disabled");
     btn.addEventListener('click' , () => {
            if(password.value.length > 8){
                password.classList.remove('redBorder')     
            }
        
        else{
            password.classList.add('redBorder')
            email.classList.add('redBorder')
        }    
     }) 
    }else{
        btn.disabled = true;
       
    }


}
form.addEventListener('submit' , (event) => {
    event.preventDefault()
    email.classList.remove('redBorder');

    window.location.href =  "https://ruzell11.github.io/final-portfolio/"
   
    
})