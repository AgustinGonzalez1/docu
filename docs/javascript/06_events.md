# Eventos en JavaScript

Los eventos permiten que los elementos reaccionen a interacciones del usuario, como hacer clic, pasar el ratón, o presionar una tecla.

## Escuchar Eventos

### `addEventListener`

El método `addEventListener` permite adjuntar un manejador de eventos a un elemento.

```js
let boton = document.getElementById("miBoton");
boton.addEventListener("click", function() {
  alert("Has hecho clic en el botón");
});
```

### Eventos Comunes

- `click`: Ocurre cuando un elemento es clicado.
- `mouseover`: Ocurre cuando el ratón pasa sobre un elemento.
- `keydown`: Ocurre cuando se presiona una tecla.

```js
document.addEventListener("keydown", function(event) {
  console.log("Tecla presionada: " + event.key);
});
```

## Remover un Evento

Puedes remover un evento con `removeEventListener`.

```js
function mostrarAlerta() {
  alert("Este evento será removido");
}

let boton = document.getElementById("miBoton");
boton.addEventListener("click", mostrarAlerta);

// Remover el evento
boton.removeEventListener("click", mostrarAlerta);
```
