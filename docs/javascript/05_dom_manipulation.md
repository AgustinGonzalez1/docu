# Manipulación del DOM en JavaScript

El DOM (Document Object Model) es una representación estructurada de un documento HTML. JavaScript puede interactuar con el DOM para cambiar la estructura, el contenido y el estilo de la página web.

## Seleccionar Elementos del DOM

### `getElementById`

Selecciona un elemento por su ID.

```js
let titulo = document.getElementById("titulo");
titulo.style.color = "red";
```

### `getElementsByClassName`

Selecciona todos los elementos que comparten una clase.

```js
let elementos = document.getElementsByClassName("texto");
elementos[0].style.color = "blue";
```

### `querySelector` y `querySelectorAll`

Selecciona el primer elemento que coincide con un selector CSS.

```js
let parrafo = document.querySelector("p");
parrafo.style.fontSize = "20px";
```

`querySelectorAll` selecciona todos los elementos que coinciden con el selector.

```js
let items = document.querySelectorAll(".item");
items.forEach(item => item.style.backgroundColor = "yellow");
```

## Modificar Contenido

Puedes cambiar el contenido de un elemento utilizando `innerHTML` o `textContent`.

```js
let parrafo = document.querySelector("p");
parrafo.innerHTML = "Este es un nuevo contenido";
```

## Crear y Eliminar Elementos

### Crear un Elemento

```js
let nuevoElemento = document.createElement("div");
nuevoElemento.textContent = "Soy un nuevo elemento";
document.body.appendChild(nuevoElemento);
```

### Eliminar un Elemento

```js
let elemento = document.querySelector("#elemento");
elemento.remove();
```
