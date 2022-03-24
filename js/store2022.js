
// se realiza la creacion de una variable donde se guardan los elementos a mostrar en el HTML
const products = [
    {
        id: 1,
        title: "Muestras Juveniles Femeninas",
        description: "Unisex Nike",
        img_src: "https://i.pinimg.com/originals/5d/e6/9c/5de69cf340cd90b006beb9dee8a9afd4.jpg", 
        prod_link: "producto",
        google_link: "google"
    },
    {
        id: 2,
        title: "Tendencia Infantill",
        description: "Nuva tendencia infantil coleccion 2022",
        img_src: "https://i.pinimg.com/originals/41/33/48/413348e3701814df220bbded6fd27f3e.jpg ",
        prod_link: "producto",
        google_link: "google"
        },
    {
        id: 3,
        title: "Zapatilla nike",
        description: "Zapatilla nike con luces Unisex",
        img_src: "https://static.dafiti.com.co/p/kuva-1623-9205841-1-catalog-new.jpg",
        prod_link: "producto",
        google_link: "google"
    },
    {
        id: 4,
        title: "Pantalon Sudadera ",
        description: "pantalos con su nueva tendencia infantil 2022",
        img_src: "https://blog.littlesmodainfantil.com/wp-content/uploads/2021/03/littles-colores-texturas-tendencias-moda-primavera-verano-1-1024x683.jpg",
        prod_link: "producto",
        google_link: "google"
    },
    {
        id: 5,
        title: "Camibuso 2022",
        description: "Polo Ralph Lauren",
        img_src: "https://madreshoy.com/wp-content/uploads/2020/03/boys-spring-fashion1-e1583518345924.jpg",
        prod_link: "producto",
        google_link: "google"
    },
    {
        id: 6,
        title: "camibuso Masculino",
        description: "Jack & Jones, Negra y cortada a la cintura. La puedes encontrar",
        img_src: "http://3.bp.blogspot.com/-T95gHs7l0tA/UGRscvhRj4I/AAAAAAAAELM/HNfPJh1e5Cs/s1600/Nanos+moda+infantil_Blogmodabebe.jpg",
        prod_link: "producto",
        google_link: "google"
    },
    {
        id: 7,
        title: "cami buso FRAME",
        description: "Frame, Sudadera en un original color marrón",
        img_src: "https://i.pinimg.com/236x/72/fd/2c/72fd2cb244f84eaf52012e09a7d4bd4f--male-style-style-men.jpg",
        prod_link: "producto",
        google_link: "google"
    },
    {
        id: 8,
        title: "Zara",
        description: "Muestras Juveniles para toda ocacion",
        img_src: "https://i.pinimg.com/736x/de/2e/10/de2e10d216e9382f42eab3f64311353a.jpg",
        prod_link: "producto",
        google_link: "google"
    },
    {
        id: 9,
        title: "Springfield",
        description: "Tendencias de muestra Juvenil un poco convencional",
        img_src: "https://i.pinimg.com/236x/c1/85/4c/c1854cbb5a8c7fc0b15f1eaef3ab20ff.jpg",
        prod_link: "producto",
        google_link: "google"
    },
    {
        id: 10,
        title: "Conjuntos de Colección",
        description: " Muestras de la ultima colección de Invierno",
        img_src: "https://www.hola.com/fashion/imagenes/tendencias/2021011170844/zara-sudadera-invierno-como-llevarlo/0-313-706/sudadera-1-a.jpg",
        prod_link: "producto",
        google_link: "google"
    },

];

let carrito = [];

// esta función es la que recibe un objeto producto
// y dibuja en el documento la presentación de la tarjeta a mostrar
function showProduct(product){
    const myNode = document.createElement('div');
    myNode.classList.add('card', 'col-sm-4');

    const myNodeCardBody = document.createElement('div');
    myNodeCardBody.classList.add('card-body');

    const myNodeTitle = document.createElement('h5');
    myNodeTitle.classList.add('card-title');
    myNodeTitle.textContent = product.title;

    const myNodeImagen = document.createElement('img');
    myNodeImagen.classList.add('img-fluid');
    myNodeImagen.setAttribute('src', product.img_src);


    const myNodedescription = document.createElement('p');
    myNodedescription.classList.add('card-text');
    myNodedescription.textContent = product.description;

    const prodLink = document.createElement("a");
    prodLink.href = product.prod_link;
    prodLink.textContent = "Go to the product"

    const googleLink = document.createElement("a");
    googleLink.href = product.google_link;
    googleLink.textContent = "google"

    // anidaciones 

    myNodeCardBody.appendChild(myNodeImagen);
    myNodeCardBody.appendChild(myNodeTitle);
    myNodeCardBody.appendChild(myNodedescription);
    myNodeCardBody.appendChild(prodLink);
    myNodeCardBody.appendChild(googleLink);
    myNode.appendChild(myNodeCardBody);

    const DOMitems = document.querySelector("#items");
    DOMitems.appendChild(myNode);


}

// "myProducts" es una matriz de objetos con los productos seleccionados,   y se  llama a la función "showProduct" para dibujar en DOM
function showProducts(myProducts) {
    myProducts.forEach((product) => {
        showProduct(product);
    });
}

/*showProducts(products);

<div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>/*
