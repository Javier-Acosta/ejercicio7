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
    const capitalInvertido = document.querySelector("#capitalInvertido");
    const rentabilidadPlazo = document.querySelector("#rentabilidadPlazo");
    const AdicionalCliente = document.querySelector("#AdicionalCliente");
    const AdicionalPlazoFijo = document.querySelector("#AdicionalPlazoFijo");
    const rentabilidadTotalES = document.querySelector("#rentabilidadTotal");

    idBtnCalcular.addEventListener("click", () => {


        let importeCapital = Number(idCapitalInvertir.value);
        console.log(importeCapital);


        let rentabilidadMensual = 0;
        rentabilidadMensual = fnDevolverRentabilidadMensual(importeCapital);
        console.log(rentabilidadMensual);


        //  cantidad de meses
        let cantidadDeMes = 0;
        cantidadDeMes = Number(idCantidadDeMeses.value);
        console.log(cantidadDeMes);



        let rentabilidadTotal = fnRentabilidadTotal(rentabilidadMensual, cantidadDeMes);
        console.log(rentabilidadTotal);
        rentabilidadTotalES.textContent = `Rentabilidad Total $ ${rentabilidadTotal}`;

        // se declaran los 2 adicionales

        let esCleinteDelBanco = idCheckClienteBanco.value;
        console.log(esCleinteDelBanco);


        // funciones de checkbox
        idCheckClienteBanco.addEventListener("change", () => {



            let rentabilidadAdicionalPorClienteDelBanco = 0;

            rentabilidadAdicionalPorClienteDelBanco = fnAdicionalPorSerClienteDelBanco(esCleinteDelBanco, rentabilidadTotal);
            console.log(`rentabilidad${rentabilidadAdicionalPorClienteDelBanco}`);





            AdicionalCliente.textContent = `Adicional por Cliente del Banco $ ${rentabilidadAdicionalPorClienteDelBanco}`;
        });



        idCheckAutoranovable.addEventListener("change", () => {

            let aceptaAutoRenovable = idCheckAutoranovable.value;
            rentabilidadPlazoFijoRenovable = fnAdicionalPorPlazoFijosAutorenovable(aceptaAutoRenovable, rentabilidadTotal);
            console.log(rentabilidadPlazoFijoRenovable);
            AdicionalPlazoFijo.textContent = `Adicional por Plazo Fijo Auto Renovable (3 meses)$ ${rentabilidadPlazoFijoRenovable}`;
        });



        capitalInvertido.textContent = `Capital Invertido es $ ${importeCapital}`;
        rentabilidadPlazo.textContent = `Rentabilidad Plazo Fijo $ ${rentabilidadMensual}`;


    });



});