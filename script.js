var menu = document.querySelector(".div-menu");
var general = document.querySelector(".general");
var mask = document.querySelector(".div-mask");
var showMenu = document.getElementById("showMenu");
var hideMenu = document.getElementById("hideMenu");
var indexShow = document.querySelector('.menu-general');

var divOffsetTop = menu.offsetTop;
var divOculto = document.getElementById("divOculto");
document.addEventListener("DOMContentLoaded", function () {
  

  general.addEventListener("scroll", function () {
    // Obtiene la posición actual del scroll
    var scrollPosition = general.scrollY || general.scrollTop;
    // Define la posición a partir de la cual el div debe aparecer
    var posicionAparicion = 1200; // Puedes ajustar este valor según tus necesidades

    // Verifica si la posición del scroll supera la posición de aparición
    if (scrollPosition > posicionAparicion) {
      divOculto.classList.add("show-up");
    } else {
      divOculto.classList.remove("show-up");
    }
  });
});
function locationHref(site, openWindow) {
  if (openWindow) {
    window.open(site, "_blank");
  } else {
    window.location.href = "#promos";
  }
}


function showIndex(show){
    if(show){
        mask.style.display = 'block';
        showMenu.style.display = 'none';
        hideMenu.style.display = 'block';
        indexShow.classList.add('show-menu-general');
    }else{
        mask.style.display = 'none';
        showMenu.style.display = 'block';
        hideMenu.style.display = 'none';
        indexShow.classList.remove('show-menu-general');
    }
   
}

function navigated(location){
    mask.style.display = 'none';
        showMenu.style.display = 'block';
        hideMenu.style.display = 'none';
        indexShow.classList.remove('show-menu-general');
        window.location.href = location;
}


const pizzaPeperoni = {
    "nombre":"Peperoni",
    "ingredientes": [
        {
            "ingrediente":"Peperoni",
            "icono": "peperoniIng.svg"
        }
    ]
}

const pizzaHawaiana = {
    "nombre":"Hawaiana",
    "ingredientes": [
        {
            "ingrediente":"Piña",
            "icono": "piñaIng.svg"
        },
        {
            "ingrediente":"Jamón",
            "icono": "jamonIng.svg"
        }
    ]
}

const pizzaVegetariana = {
    "nombre":"Vegetariana",
    "ingredientes": [
        {
            "ingrediente":"Pimiento",
            "icono": "pimientoVerdeIng.svg"
        },
        {
            "ingrediente":"Champiñones",
            "icono": "champiñonIng.svg"
        },
        {
            "ingrediente":"Elote",
            "icono": "eloteIng.svg"
        },
        {
            "ingrediente":"Aceituna (Opcional)",
            "icono": "aceitunaIng.svg"
        }
    ]
}


const pizzaAtun = {
    "nombre":"Atún",
    "ingredientes": [
        {
            "ingrediente":"Atún",
            "icono": "atunIng.svg"
        },
        {
            "ingrediente":"Elote",
            "icono": "eloteIng.svg"
        },
        {
            "ingrediente":"Pimiento",
            "icono": "pimientoVerdeIng.svg"
        }
    ]
}


const pizzaHawaianaEspecial = {
    "nombre":"Hawaiana Especial",
    "ingredientes": [
        {
            "ingrediente":"Jamón",
            "icono": "jamonIng.svg"
        },
        {
            "ingrediente":"Piña",
            "icono": "piñaIng.svg"
        },
        {
            "ingrediente":"Champiñon",
            "icono": "champiñonIng.svg"
        },
        {
            "ingrediente":"Tocino",
            "icono": "tocinoIng.svg"
        }
    ]
}

const pizzaNapolitana = {
    "nombre":"Napolitana",
    "ingredientes": [
        {
            "ingrediente":"Peperoni",
            "icono": "peperoniIng.svg"
        },
        {
            "ingrediente":"Champiñon",
            "icono": "champiñonIng.svg"
        },
        {
            "ingrediente":"Pimiento",
            "icono": "pimientoVerdeIng.svg"
        },
        {
            "ingrediente":"Aceituna negra",
            "icono": "aceitunaIng.svg"
        }
    ]
}

const pizzaChoriqueso = {
    "nombre":"Choriqueso",
    "ingredientes": [
        {
            "ingrediente":"Chorizo",
            "icono": "chorizoIng.svg"
        },
        {
            "ingrediente":"Tocino",
            "icono": "tocinoIng.svg"
        }
    ]
}

const pizzaToluquenia = {
    "nombre":"Toluqueña",
    "ingredientes": [
        {
            "ingrediente":"Longaniza",
            "icono": "longanizaIng.svg"
        },
        {
            "ingrediente":"Champiñon",
            "icono": "champiñonIng.svg"
        },
        {
            "ingrediente":"Elote",
            "icono": "eloteIng.svg"
        },
        {
            "ingrediente":"Chile Verde",
            "icono": "chileVerdeIng.svg"
        }
    ]
}

const pizzaAmericana = {
    "nombre":"Americana",
    "ingredientes": [
        {
            "ingrediente":"Tocino",
            "icono": "tocinoIng.svg"
        },
        {
            "ingrediente":"Jamón",
            "icono": "jamonIng.svg"
        },
        {
            "ingrediente":"Salchicha",
            "icono": "salchichaIng.svg"
        }
    ]
}

const pizzaTresQuesos = {
    "nombre":"3 Quesos",
    "ingredientes": [
        {
            "ingrediente":"Mezcla de 3 quesos",
            "icono": "quesoIng.svg"
        }
    ]
}

const pizzaSuprema = {
    "nombre":"Suprema",
    "ingredientes": [
        {
            "ingrediente":"Salchicha",
            "icono": "salchichaIng.svg"
        },
        {
            "ingrediente":"Jamón",
            "icono": "jamonIng.svg"
        },
        {
            "ingrediente":"Peperoni",
            "icono": "peperoniIng.svg"
        }
    ]
}

const pizzaItaliana = {
    "nombre":"Italiana",
    "ingredientes": [
        {
            "ingrediente":"Peperoni",
            "icono": "peperoniIng.svg"
        },
        {
            "ingrediente":"Champiñon",
            "icono": "champiñonIng.svg"
        },
        {
            "ingrediente":"Pimiento verde",
            "icono": "pimientoVerdeIng.svg"
        }
    ]
}

const listaPizzas = [pizzaItaliana, pizzaSuprema, pizzaTresQuesos, pizzaAmericana, pizzaToluquenia, pizzaChoriqueso, pizzaNapolitana, pizzaHawaianaEspecial, pizzaAtun, pizzaVegetariana, pizzaHawaiana, pizzaPeperoni];
const divIngredientes = document.getElementById('ingredientesd');
const typePizza = document.getElementById('typePizza');
const modalIngrediets = document.querySelector('.div-modal-ingredients');

function viewIngredients(name){
    for(let pizza of listaPizzas){
        if(pizza.nombre === name){
            modalIngrediets.classList.add('show-modal-ingredients');
            for(let ingrediente of pizza.ingredientes){
                divIngredientes.innerHTML += `
                <div class="div-ingredient">
                    <div class="img-ing">
                        <img src="./resources/ingredientes/${ingrediente.icono}" alt="INGREDIENTE">
                    </div>
                    <p class="text-type-ingr">${ingrediente.ingrediente}</p>
                </div>
            `;
            }
            menu.style.display = 'none';
            divOculto.style.display = 'none';
            typePizza.innerHTML = pizza.nombre;
            break;
        }
    }
}

function closeModalIngredients(){
    menu.style.display = 'flex';
    divIngredientes.innerHTML = "";
    divOculto.style.display = 'flex';
    modalIngrediets.classList.remove('show-modal-ingredients');
}