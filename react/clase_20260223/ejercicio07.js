const precioBase = 50;
const iva = 0.21;
const cantidad = 3;
let total = (cantidad * precioBase) * iva

console.log(`Total: 181.50 € (${cantidad} unidades x ${precioBase} € + ${iva*100}% IVA)`);