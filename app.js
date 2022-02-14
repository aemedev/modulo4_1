//Varables acceso
let resultado = document.querySelector("#result");
resultado.textContent = 0;

let get1 = () => document.querySelector("#first-number").value;
let get2 = () => document.querySelector("#second-number").value;
let numbs = document.forms['myForm']['input-number'];

//<<================================================>>//

let suma = () => {
    get1() == '' || get2() == '' ? validacion() : resultado.textContent = parseInt(get1()) + parseInt(get2());
};
let resta = () => {
    get1() == '' || get2() == '' ? validacion() : resultado.textContent = get1() - get2();
}
let multi = () => {
    get1() == '' || get2() == '' ? validacion() : resultado.textContent = get1() * get2();
};
let divi = () => {
    get1() == '' || get2() == '' ? validacion() : resultado.textContent = get1() / get2();
};
let validacion = () => {
    if(numbs.value == ''){
        resultado.textContent = 'Number field cannot be empty';
    }
}

//<<=============================================================================>>//
let sumaButton = document.querySelector("#suma").addEventListener("click", suma);
let restaButton = document.querySelector("#resta").addEventListener("click", resta);
let multiButton = document.querySelector("#multi").addEventListener("click", multi);
let diviButton = document.querySelector("#divi").addEventListener("click", divi);
