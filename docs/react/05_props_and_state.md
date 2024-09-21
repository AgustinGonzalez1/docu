# Props y State en React

## Props

Los `props` son datos que se pasan de un componente padre a un componente hijo. Son inmutables y permiten que los componentes hijos accedan a datos que no han sido definidos dentro de ellos mismos.

```jsx
function Saludo(props) {
  return <h1>Hola, {props.nombre}</h1>;
}

<Saludo nombre="Juan" />
```

### PropTypes

Puedes definir el tipo de `props` que un componente espera recibir utilizando `PropTypes`.

```jsx
import PropTypes from 'prop-types';

function Saludo(props) {
  return <h1>Hola, {props.nombre}</h1>;
}

Saludo.propTypes = {
  nombre: PropTypes.string.isRequired
};
```

## State

El `state` es un objeto que representa el estado interno de un componente y puede cambiar con el tiempo. A diferencia de los `props`, el estado es mutable.

### Usar `state` en componentes funcionales con hooks

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

### Usar `state` en componentes de clase

```jsx
class Contador extends React.Component {
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

### Levantamiento de State (Lifting State Up)

Cuando dos o más componentes necesitan compartir el mismo estado, se eleva el estado al componente padre común.

```jsx
function Input({ valor, setValor }) {
  return <input value={valor} onChange={e => setValor(e.target.value)} />;
}

function Formulario() {
  const [valor, setValor] = useState('');
  
  return (
    <div>
      <Input valor={valor} setValor={setValor} />
      <p>El valor actual es: {valor}</p>
    </div>
  );
}
```
