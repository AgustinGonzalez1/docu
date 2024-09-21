# Funciones en JavaScript

## Declaración de Funciones

Las funciones en JavaScript se pueden declarar de la siguiente manera:

```js
function saludar(nombre) {
  return "Hola, " + nombre;
}

console.log(saludar("Carlos"));
```

## Funciones anónimas

También puedes crear funciones anónimas y asignarlas a una variable.

```js
let suma = function(a, b) {
  return a + b;
};

console.log(suma(3, 4));  // 7
```

## Funciones Flecha

Las funciones flecha (`arrow functions`) son una sintaxis más corta para escribir funciones.

```js
let multiplicar = (a, b) => a * b;

console.log(multiplicar(3, 4));  // 12
```
