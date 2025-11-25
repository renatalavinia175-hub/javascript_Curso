const carros = [
    { modelo: "Onix", marca: "Chevrolet" },
    { modelo: "Argo", marca: "Fiat" },
    { modelo: "Mobi", marca: "Fiat" },
    { modelo: "HB20", marca: "Hyundai" }
];
 const fiats = carros.filter(carro => carro.marca === "fiat");
 console.log(fiats);