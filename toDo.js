
const input = document.querySelector("input");
const btn = document.querySelector(".btn_add");
const ul = document.querySelector("ul");
const vacio = document.querySelector(".vacio")


btn.addEventListener("click", (e) => {
    e.preventDefault();

    const texto = input.value;

    if (texto !== "") {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = texto;

        li.appendChild(p);
        li.appendChild(borrarBTN());
        li.className = "nuevoItem";
        ul.appendChild(li);

        texto.value = "";

        vacio.style.display = "none";

    }
    input.value = "";

});


function borrarBTN() {
    const crearBTN = document.createElement("button");
    crearBTN.textContent = "X";
    crearBTN.className = "btn-delete";

    crearBTN.onclick = function (e) {
        const valor = e.target.parentElement;
        ul.removeChild(valor);


        const values = document.querySelectorAll("li");
        if (values.length === 0) {
            vacio.style.display = 'block';
        }

    }



    return crearBTN;
}