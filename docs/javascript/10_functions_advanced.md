# Funciones Avanzadas en JavaScript

## Funciones como Objetos de Primera Clase

En JavaScript, las funciones son objetos de primera clase, lo que significa que pueden ser asignadas a variables, pasadas como argumentos y retornadas por otras funciones.

```js
let suma = function(a, b) {
  return a + b;
};
console.log(suma(3, 4)); // 7
```

## Funciones `call`, `apply` y `bind`

### `call()`

El método `call` invoca una función con un valor específico de `this` y argumentos proporcionados individualmente.

```js
function saludar(saludo) {
  console.log(saludo + ", mi nombre es " + this.nombre);
}

let persona = { nombre: "Juan" };
saludar.call(persona, "Hola");
```

### `apply()`

El método `apply` es similar a `call`, pero los argumentos se pasan como un array.

```js
saludar.apply(persona, ["Hola"]);
```

### `bind()`

El método `bind` crea una nueva función con `this` vinculado a un objeto específico.

```js
let saludarJuan = saludar.bind(persona);
saludarJuan("Hola");
```

## Funciones Autoejecutables (IIFE)

Las IIFE (Immediately Invoked Function Expression) son funciones que se ejecutan inmediatamente después de ser definidas.

```js
(function() {
  console.log("Soy una IIFE");
})();
```
