
let userFirstName = document.querySelector("#fn")
let userLastName = document.querySelector("#ln")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let registerBtn = document.querySelector("#sign_Up")
registerBtn.addEventListener("click" , function(e)
{
      e.preventDefault()
      if (userFirstName.value === "" || userLastName.value === "" || email.value === "" || password.value === "") {
        alert("please fill Data")
      }else{
        localStorage.setItem("userFirstName" , userFirstName.value);
        localStorage.setItem("userLastName" , userLastName.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" , password.value);
        setInterval ( () =>{
            window.location = "login.html"
        }
        )
      }

})