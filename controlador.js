const fnDevolverRentabilidadMensual = (capitalIngresado) => {

    if ((capitalIngresado >= 500000) && (capitalIngresado <= 1500000)) {
        return capitalIngresado * 6 / 100;
    }
    if ((capitalIngresado > 1500000) && (capitalIngresado <= 5000000)) {
        return capitalIngresado * 7.5 / 100;
    }
    if ((capitalIngresado > 5000000) && (capitalIngresado <= 25000000)) {
        return capitalIngresado * 8.5 / 100;
    }
    if (capitalIngresado > 25000000) {
        return capitalIngresado * 9.5 / 100;
    }
    return 0;
};

const fnRentabilidadTotal = (rentabilidadMensual, cantidadDeMeses) => {

    if ((cantidadDeMeses >= 1) && (cantidadDeMeses <= 3)) {
        return rentabilidadMensual * cantidadDeMeses;
    } else {
        return 0;
    }
}

// funcion si es cliente del banco
const fnAdicionalPorSerClienteDelBanco = (esClienteDelBanco, rentabilidadTotal) => {

    if (esClienteDelBanco) {
        return (rentabilidadTotal * 0.7) / 100;
    } else {
        return 0;
    }




}


// para clientes que hacepten palzo fijos renovables automaticos por 3 meses


const fnAdicionalPorPlazoFijosAutorenovable = (aceptaAutoRenovable, rentabilidadTotal) => {

    if (aceptaAutoRenovable) {
        return (rentabilidadTotal * 0.9) / 100;
    } else {
        return 0;
    }
}

window.addEventListener("load", () => {


    const idCapitalInvertir = document.querySelector("#idCapitalInvertir");
    const idCantidadDeMeses = document.querySelector("#idCantidadDeMeses");
    const idCheckClienteBanco = document.querySelector("#idCheckClienteBanco");
    const idCheckAutoranovable = document.querySelector("#idCheckAutoranovable");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");

    idBtnCalcular.addEventListener("click", () => {


        let importeCapital = Number(idCapitalInvertir.value);
        let rentabilidadMensual = 0;

        rentabilidadMensual = fnDevolverRentabilidadMensual(importeCapital);
        console.log(rentabilidadMensual);


        //  cantidad de meses
        let cantidadDeMes = 0;
        cantidadDeMes = Number(idCantidadDeMeses.value);


        let rentabilidadTotal = fnRentabilidadTotal(rentabilidadMensual, cantidadDeMes);
        console.log(rentabilidadTotal);

        // se declaran los 2 adicionales

        let esCleinteDelBanco = true;
        let rentabilidadAdicionalPorClienteDelBanco = 0;

        rentabilidadAdicionalPorClienteDelBanco = fnAdicionalPorSerClienteDelBanco(esCleinteDelBanco, rentabilidadTotal);
        console.log(rentabilidadAdicionalPorClienteDelBanco);

        let rentabilidadPlazoFijoRenovable = fnAdicionalPorPlazoFijosAutorenovable(true, rentabilidadTotal);
        console.log(rentabilidadPlazoFijoRenovable);
    })



});