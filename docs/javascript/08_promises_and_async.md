# Promesas y Asincronía en JavaScript

## Promesas

Una promesa es un objeto que representa la eventual finalización o fracaso de una operación asincrónica.

```js
let promesa = new Promise(function(resolve, reject) {
  let exito = true;
  if (exito) {
    resolve("La operación fue exitosa");
  } else {
    reject("La operación falló");
  }
});

promesa.then(function(resultado) {
  console.log(resultado); // "La operación fue exitosa"
}).catch(function(error) {
  console.log(error);
});
```

## Async/Await

La palabra clave `async` convierte una función en asincrónica, y `await` pausa la ejecución hasta que una promesa se resuelva.

```js
async function obtenerDatos() {
  let respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
  let datos = await respuesta.json();
  console.log(datos);
}

obtenerDatos();
```
