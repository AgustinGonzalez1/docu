# Métodos Avanzados de Arrays

## `reduce`

El método `reduce` ejecuta una función de reducción sobre cada elemento del array, resultando en un solo valor.

```js
const numeros = [1, 2, 3, 4];
const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma); // 10
```

## `find`

El método `find` devuelve el primer elemento que cumpla con la condición dada.

```js
const personas = [{nombre: "Ana", edad: 30}, {nombre: "Juan", edad: 25}];
const personaMayor = personas.find(persona => persona.edad > 28);
console.log(personaMayor); // {nombre: "Ana", edad: 30}
```

## `every` y `some`

- `every`: Verifica si todos los elementos del array cumplen una condición.
- `some`: Verifica si al menos un elemento cumple una condición.

```js
const esMayor = personas.every(persona => persona.edad > 20);  // true
const algunMenor = personas.some(persona => persona.edad < 20); // false
```

# Event Loop y Asincronía

El **event loop** es el corazón de JavaScript asíncrono. Gestiona la ejecución de funciones asíncronas, asegurando que las tareas se ejecuten una tras otra de manera no bloqueante.

```js
console.log("Primero");

setTimeout(() => {
  console.log("Segundo");
}, 0);

console.log("Tercero");
// Salida: Primero, Tercero, Segundo
```

El **event loop** hace que la tarea asincrónica `setTimeout` se ejecute al final, incluso si el tiempo es `0`.

# Manejo Avanzado de Errores

### `try-catch` con código asincrónico

Puedes capturar errores en funciones `async` utilizando `try-catch`.

```js
async function obtenerDatos() {
  try {
    let respuesta = await fetch("https://api.example.com/datos");
    let datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
}

obtenerDatos();
```

# Funciones Avanzadas

## `apply`, `call`, `bind`

### `call`

El método `call` invoca una función con un valor específico de `this`.

```js
function saludar() {
  console.log(`Hola, soy ${this.nombre}`);
}

const persona = { nombre: "Ana" };
saludar.call(persona); // Hola, soy Ana
```

### `bind`

El método `bind` crea una nueva función con `this` vinculado a un objeto específico.

```js
const saludarJuan = saludar.bind({ nombre: "Juan" });
saludarJuan(); // Hola, soy Juan
```
