let userPassword = document.querySelector("#password");
let userEmail = document.querySelector("#email");
let getEmail = localStorage.getItem("email");
let getPassword = localStorage.getItem("password");
let loginBtn = document.querySelector("#sign_in");

loginBtn.addEventListener("click" , function(e){
    e.preventDefault()
    if (userEmail.value === "" || userPassword.value === "") {
        alert("Please Fill Data")
    }else if (getEmail && getEmail.toLowerCase().trim() === userEmail.value.toLowerCase().trim() && getPassword && getPassword.toLowerCase().trim() === userPassword.value) {
        setTimeout( ()=>{
                        window.location="home.html"
                    },1500)
                   }else{
                    alert("password Or userName is wrong ")
                   }
    }
)
