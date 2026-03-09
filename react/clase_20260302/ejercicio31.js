const tareas = [
    { texto: "Comprar leche", completada: true },
    { texto: "Estudiar JS", completada: false },
    { texto: "Hacer ejercicio", completada: false },
    { texto: "Leer un libro", completada: true },
]

const tareasDone = tareas.filter(({texto, completada}) => completada);

console.log(tareasDone);