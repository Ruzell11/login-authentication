var email = document.querySelector('.email');
var password = document.querySelector('.password');
var checkbox = document.getElementById('checkbox');
var btn = document.querySelector('.btn');
var form = document.querySelector('.form');
var container = document.querySelector('.container');
var errors = document.querySelector('.errors');
var errorContainerEmail = document.querySelector('.errorcontainer');
var errorContainerPass = document.querySelector('.errorcontainerPass');


 const isEmpty = () => {

    var emailValue = 'user123@gmail.com' 
    var passwordValue = 'user123'
    var passwordGuest = "guest123"

    if(email.value && password.value  && checkbox.addEventListener('click' , () => {
        if(checkbox.checked){
            btn.removeAttribute("disabled")
            btn.addEventListener('click' , () => {
                if(email.value === emailValue && password.value === passwordValue){
                    window.location.href = "https://ruzell11.github.io/final-portfolio/"
                    container.innerHTML = "Welcome Ruz!!"
                    email.classList.remove('redBorder');
                }else{
                    if(password.value != passwordValue && email.value != emailValue){
                        errors.innerHTML = "Invalid Email and Password"
                    } else if(email.value != emailValue){
                        errorContainerEmail.innerHTML = "Invalid Email"
                        errors.innerHTML = ""
                    }else if(password.value != passwordValue){
                        errorContainerPass.innerHTML = "Invalid Pass"
                        errors.innerHTML = ""
                    }
                }if(email.value && password.value === passwordGuest){
                   errors.innerHTML = ""
                    container.innerHTML = "Welcome Guest"
                    window.location.href = "https://www.youtube.com/"
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


