var email = document.querySelector('.email');
var password = document.querySelector('.password');
var checkbox = document.getElementById('checkbox');
var btn = document.querySelector('.btn');
var form = document.querySelector('.form');
var container = document.querySelector('.container')


 const isEmpty = () => {

    var emailValue = 'user123@gmail.com' 
    var passwordValue = 'user123'

    if(email.value && password.value  && checkbox.addEventListener('click' , () => {
        if(checkbox.checked){
            btn.removeAttribute("disabled")
            btn.addEventListener('click' , () => {
                if(email.value === emailValue && password.value === passwordValue){
                    window.location.href = "https://ruzell11.github.io/final-portfolio/"
                    container.innerHTML = "Welcome Ruz!!"
                    email.classList.remove('redBorder');
                }else{
                    container.innerHTML = "Welcome User!"
                }   
            })
        }else{
            btn.disabled = true;
        }
    }))
    {

    
     
           
        }
     }
form.addEventListener('submit' , (event) => {
    event.preventDefault()
    
});


