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

const drawProductos = async (data)=>{
    const divProduc = document.getElementById('contproduct');
    divProduc.innerHTML = "";
    data.forEach(products => console.log(products));
}


const printProduct = (data) =>{
    const divProduc = document.getElementById('contproduct');
    const miArticulo = document.createElement('article');

    const miImagen = document.createElement('img');
    miImagen.src = data.image;
    miArticulo.appendChild(miArticulo);

    const titulo = document.createElement('h2');
    titulo.textContent = data.title;
    miArticulo.appendChild(titulo);

    const precio = document.createElement('p');
    precio.textContent = data.price;
    miArticulo.appendChild(price);


    divProduc.appendChild(miArticulo);
    console.log(data);
}

getProducts('').then(data => drawProductos(data));