// 1. La variable color se define con const y luego se intenta redefinir.
// 2. La variable usuario no se inicializa;
// 3. No hace falta poner let de nuevo, sería:
let total = 100;
const descuento = 20;
total = total - descuento;
console.log(total);