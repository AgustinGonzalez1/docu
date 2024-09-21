# Context API en React

## ¿Qué es Context API?

Context API permite compartir datos globalmente entre componentes sin necesidad de pasar `props` a través de cada nivel de la jerarquía.

### Crear un Contexto

Primero, debes crear un contexto usando `React.createContext()`.

```jsx
const TemaContext = React.createContext('claro');
```

### Proveedor de Contexto

El proveedor de contexto (`Provider`) envuelve a los componentes que necesitan acceso al contexto y les proporciona el valor.

```jsx
function App() {
  return (
    <TemaContext.Provider value="oscuro">
      <Toolbar />
    </TemaContext.Provider>
  );
}
```

### Consumir un Contexto con `useContext`

Los componentes pueden consumir el contexto usando el hook `useContext`.

```jsx
import { useContext } from 'react';

function Toolbar() {
  const tema = useContext(TemaContext);
  return <div className={tema}>Toolbar con tema {tema}</div>;
}
```

## Usos Comunes de Context API

Context API se utiliza comúnmente para temas, configuración de usuario, autenticación y cualquier otro dato que deba estar disponible globalmente en una aplicación.
