# Manejo de Eventos y Formularios en React

## Eventos en React

Los eventos en React son manejados de manera similar a los eventos DOM, pero con algunas diferencias en la sintaxis.

### Ejemplo de Evento `onClick`

```jsx
function Boton() {
  function manejarClick() {
    alert("Botón clicado");
  }

  return <button onClick={manejarClick}>Haz clic aquí</button>;
}
```

### Pasar Parámetros a un Evento

Puedes pasar parámetros a los manejadores de eventos utilizando una función flecha.

```jsx
function Boton() {
  function manejarClick(mensaje) {
    alert(mensaje);
  }

  return <button onClick={() => manejarClick("Hola")}>Haz clic aquí</button>;
}
```

## Manejo de Formularios

Los formularios en React son controlados con el estado. Esto significa que el valor del campo del formulario es gestionado a través del estado de React.

### Ejemplo de Formulario Controlado

```jsx
import React, { useState } from 'react';

function Formulario() {
  const [valor, setValor] = useState("");

  function manejarCambio(e) {
    setValor(e.target.value);
  }

  function manejarSubmit(e) {
    e.preventDefault();
    alert("Formulario enviado: " + valor);
  }

  return (
    <form onSubmit={manejarSubmit}>
      <input type="text" value={valor} onChange={manejarCambio} />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

## Validación de Formularios

Puedes realizar validaciones en los formularios antes de enviarlos.

```jsx
function Formulario() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  function manejarSubmit(e) {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("El email no es válido");
    } else {
      setError(null);
      alert("Formulario enviado");
    }
  }

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
}
```
