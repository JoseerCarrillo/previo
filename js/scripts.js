const getProducts = async(name)=>{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data.products;
}


document.addEventListener("DOMContentLoaded", function(){
    var loginForm = document.getElementById("loginForm");
    if(loginForm){
        loginForm.addEventListener("ingresar", function(event){
            event.preventDefault();
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            if(username === "mor_2314" && password === "83r5^_"){
                window.location.href = "productos.html";
            } else{
                alert("Usuario o contraseña incorrectos");
            }
        });
    }
});
