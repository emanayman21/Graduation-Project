 
 let username = document.querySelector("#username")
 let password = document.querySelector("#password")
 let loginBtn = document.querySelector("#sign-in")

 let getUsername = localStorage.getItem("username")
 let getPassword = localStorage.getItem("password")

 let show = document.getElementById("show")

 loginBtn.addEventListener("click" , function(e){
    e.preventDefault()
    if ( username.value === "" || password.value === ""){
        alert("ادخل البيانات")
    }else{
        if(getUsername === username.value.trim() && getPassword === password.value ){
            setTimeout( () => {
                window.location = "index.html"
            } ,1000)
        } else{
            alert("username or password is wrong")
        }
    }
 })


 show.onchange = function(){
    password.type = show.checked ? "test" : "password"
}
