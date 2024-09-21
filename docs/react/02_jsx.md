# JSX en React

## ¿Qué es JSX?

JSX (JavaScript XML) es una extensión de la sintaxis de JavaScript que permite escribir estructuras HTML dentro de JavaScript. Es una de las características clave de React, ya que facilita la creación de componentes visuales.

### Sintaxis básica de JSX

```jsx
const elemento = <h1>¡Hola Mundo!</h1>;
```

Este código JSX es transformado por React en JavaScript puro:

```js
const elemento = React.createElement('h1', null, '¡Hola Mundo!');
```

## Expresiones en JSX

Puedes utilizar expresiones de JavaScript dentro de JSX envolviéndolas entre llaves `{}`.

```jsx
const nombre = "Juan";
const elemento = <h1>Hola, {nombre}</h1>;
```

### Atributos en JSX

Los atributos en JSX se escriben de manera similar a los atributos HTML, pero algunos nombres difieren ligeramente. Por ejemplo, en lugar de `class`, utilizamos `className`.

```jsx
const elemento = <div className="container">Contenido</div>;
```

## JSX y fragmentos

Si deseas retornar múltiples elementos sin un contenedor padre, puedes utilizar un `Fragment`.

```jsx
import React from 'react';

function Lista() {
  return (
    <>
      <li>Elemento 1</li>
      <li>Elemento 2</li>
    </>
  );
}

export default Lista;
```
