
const $contenedor = document.getElementById("contenedor__cursos"),
fragmento = document.createDocumentFragment(),
url = "https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories";


function obtenerTarjetas() {
  fetch(url)
  .then((response) => {
    return response.ok ? response.json() : Promise.reject
    (response);
  })
  .then((json) => {
    console.log(json);
    json.communityCategories.forEach( (el) =>{
    let div = document.createElement("div");
    div.classList.add("tarjeta");
    div.innerHTML= `
    <div class="tarjeta__imagen">
    <img class ="tarjeta__imagen-background" src="${el.background ||
    "https://storage.googleapis.com/bucket-larnu/media/business/153/images/BO64E73I.png"
    }" alt= " ${el.name}">
    <img class ="tarjetas__imagen-icono" src = "${el.icon}"
    alt = "${el.name}">
    </div>
    <div class = "tarjeta__parrafo">
    <h3 class="tarjeta__titulo">${el.name}</h3>
    <p class = "tarjeta__texto">Total Quizzes : ${el.totalQuizzes}</p>
    <p class = "tarjeta__texto"> User : ${el.users}</p>
    <a href="https://larnu.app/" target="_blank" class="btn__btn-primary">Go to Larnu</a>
    </div> 
    `;
    fragmento.appendChild(div)
    });
    $contenedor.appendChild(fragmento)
  }).catch((err)=>{
    let message =`Error: ${err}`
    console.log(err)
  })
}
obtenerTarjetas();
  