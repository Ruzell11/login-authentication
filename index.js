var email = document.querySelector('.email');
var password = document.querySelector('.password');
var errors = document.querySelector('.errors');
var errorContainerEmail = document.querySelector('.errorcontainer');
var errorContainerPass = document.querySelector('.errorcontainerPass');
 $(() => {
  $('.form-control').keyup(() => {
     var emailValue = 'user123@gmail.com' 
    var passwordValue = 'user123'
    var passwordGuest = "guest123"
    if(email.value && password.value  && $('#checkbox').click(() => {
        if(checkbox.checked){
            $('.btn').removeAttr("disabled")
           $('.btn').click(() => {
                if(email.value === emailValue && password.value === passwordValue){
                   $('.container').html ( "Welcome Ruz!!")
                    errorContainerPass.innerHTML = ""
                    errors.innerHTML = ""
                    errorContainerEmail.innerHTML = ""
                    $('.form-control').removeClass('redBorder')
                    window.location.href = "https://stackoverflow.com/questions/7078660/jquery-location-href"
                }else{
                    if(password.value != passwordValue && email.value != emailValue){
                        errors.innerHTML = "Invalid Email and Password"
                        errorContainerPass.innerHTML = ""
                        errorContainerEmail.innerHTML = ""
                        $('.form-control').addClass('redBorder')
                    } else if(email.value != emailValue && password.value === passwordValue){
                        errorContainerEmail.innerHTML = "Invalid Email"
                        errors.innerHTML = ""
                        email.classList.add('redBorder')
                        password.classList.remove('redBorder')
                    }else if(password.value != passwordValue && email.value === emailValue){
                        errorContainerPass.innerHTML = "Invalid Pass"
                        errors.innerHTML = ""
                        email.classList.remove('redBorder')
                        password.classList.add('redBorder')
                    }
                }if(email.value && password.value === passwordGuest){
                    email.classList.remove('redBorder')
                   errors.innerHTML = ""
                   $('.container').html ( "Welcome Guest")
                    window.location.href = "https://www.youtube.com/"
                }
            })
        }else{
            $('.btn').disable = true
        }
    }));
})
})
 $(() => {
    $('.form').submit((event) => {
        event.preventDefault()
    });
 })
    
 



