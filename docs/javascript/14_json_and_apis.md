# JSON y APIs en JavaScript

## JSON (JavaScript Object Notation)

JSON es un formato de texto ligero para almacenar y transportar datos. Es similar a los objetos de JavaScript.

### Convertir un Objeto JavaScript a JSON

```js
let persona = { nombre: "Juan", edad: 30 };
let json = JSON.stringify(persona);
console.log(json); // {"nombre":"Juan","edad":30}
```

### Convertir JSON a un Objeto JavaScript

```js
let json = '{"nombre":"Juan","edad":30}';
let persona = JSON.parse(json);
console.log(persona.nombre); // Juan
```

## APIs en JavaScript

Las APIs permiten obtener o enviar datos a servidores web. Puedes usar `fetch` para hacer peticiones HTTP.

### Hacer una petición GET

```js
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("Error: ", error));
```

### Hacer una petición POST

```js
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("Error: ", error));
```
