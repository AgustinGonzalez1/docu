# Componentes en React

En React, los componentes son bloques de construcción reutilizables que definen cómo debería verse una parte de la interfaz de usuario.

## Componentes Funcionales

Los componentes funcionales son funciones que devuelven JSX.

```jsx
function Saludo() {
  return <h1>¡Hola Mundo!</h1>;
}
```

## Componentes de Clase

Los componentes de clase fueron el estándar antes de la llegada de los hooks. Estos tienen más funcionalidades como el uso de estados y métodos del ciclo de vida.

```jsx
import React, { Component } from 'react';

class Saludo extends Component {
  render() {
    return <h1>¡Hola Mundo desde un componente de clase!</h1>;
  }
}

export default Saludo;
```

## Props

Los `props` (abreviación de propiedades) son datos que se pasan de un componente padre a un componente hijo.

```jsx
function Saludo(props) {
  return <h1>Hola, {props.nombre}</h1>;
}

<Saludo nombre="Juan" />
```

## State

El `state` es un objeto que representa el estado interno de un componente y que puede cambiar a lo largo del tiempo.

### Uso del estado en componentes de clase:

```jsx
class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
  }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  }

  render() {
    return (
      <div>
        <p>Contador: {this.state.contador}</p>
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}
```

### Uso del estado en componentes funcionales (con hooks):

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
