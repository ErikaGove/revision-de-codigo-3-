// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const li = document.getElementById("lista-de-productos");//getElementsByName se cambio a getElementById
const entrada = document.querySelector('input');//Cambiamos la forma en la que llama al elemento o etiqueta input


const displayProductos=(lista)=>{            // creamos una funcion que me muestre los productos que necesito
  for (let i = 0; i < lista.length; i++) {

    //creamos el elemento div con la clase producto
    let d = document.createElement("div") //cambiamos el tipo de declaracion de variables a let
    d.classList.add("producto")

    let ti = document.createElement("p") //cambiamos el tipo de declaracion de variables a let
    ti.classList.add("titulo")
    ti.textContent = lista[i].nombre
    
    let imagen = document.createElement("img");
    imagen.setAttribute('src', lista[i].img);

    d.appendChild(ti)
    d.appendChild(imagen)

    li.appendChild(d)
  }
}

displayProductos(productos)



const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = entrada.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  displayProductos(productosFiltrados); // Llamamos a la funcion para poder reutilizar codigo

}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  