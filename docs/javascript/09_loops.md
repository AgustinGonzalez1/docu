# Bucles en JavaScript

Los bucles permiten ejecutar un bloque de código repetidamente mientras se cumpla una condición específica.

## Bucle `for`

El bucle `for` es uno de los más comunes.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

## Bucle `while`

El bucle `while` ejecuta el bloque de código mientras una condición sea verdadera.

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

## Bucle `do...while`

El bucle `do...while` siempre ejecuta el bloque al menos una vez.

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

## `for...of`

Este bucle recorre elementos de un objeto iterable (arrays, strings, etc.).

```js
let frutas = ["manzana", "naranja", "mango"];
for (let fruta of frutas) {
  console.log(fruta);
}
```

## `for...in`

Este bucle recorre las propiedades de un objeto.

```js
let persona = { nombre: "Juan", edad: 30 };
for (let propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]);
}
```
