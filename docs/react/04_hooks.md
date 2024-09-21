# Hooks en React

Los hooks son una adición a React que permiten usar el estado y otras características de React en componentes funcionales.

## `useState`

El hook `useState` permite agregar estado a un componente funcional.

```jsx
import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
```

## `useEffect`

El hook `useEffect` es equivalente a los métodos del ciclo de vida en componentes de clase. Permite realizar efectos secundarios como peticiones HTTP o suscribirse a eventos.

```jsx
import React, { useState, useEffect } from 'react';

function Datos() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setDatos(data));
  }, []);

  return (
    <ul>
      {datos.map(dato => (
        <li key={dato.id}>{dato.title}</li>
      ))}
    </ul>
  );
}
```

## `useContext`

El hook `useContext` se utiliza para acceder a un contexto en React.

```jsx
const TemaContext = React.createContext('claro');

function MiComponente() {
  const tema = useContext(TemaContext);
  return <div className={tema}>Componente con tema {tema}</div>;
}
```

## Otros Hooks

- `useReducer`: Alternativa para gestionar estados más complejos.
- `useRef`: Permite acceder directamente a elementos del DOM.
