# Manejo de Errores en JavaScript

En JavaScript, el manejo de errores se realiza principalmente con `try`, `catch`, y `finally`.

## `try...catch`

El bloque `try...catch` intenta ejecutar un bloque de código y, si se produce un error, lo captura.

```js
try {
  let resultado = 10 / 0;
  console.log(resultado);
} catch (error) {
  console.log("Ha ocurrido un error: " + error.message);
}
```

## `finally`

El bloque `finally` se ejecuta independientemente de si se produjo un error.

```js
try {
  let resultado = 10 / 0;
} catch (error) {
  console.log("Ha ocurrido un error");
} finally {
  console.log("Este bloque siempre se ejecuta");
}
```

## Lanzar Errores

Puedes lanzar tus propios errores con `throw`.

```js
function verificarEdad(edad) {
  if (edad < 18) {
    throw new Error("Debes ser mayor de edad");
  }
}

try {
  verificarEdad(16);
} catch (error) {
  console.log(error.message);
}
```
