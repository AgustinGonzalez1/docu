# Ciclo de Vida de los Componentes en React

Los componentes en React pasan por diferentes fases conocidas como el ciclo de vida del componente. Los métodos del ciclo de vida permiten ejecutar código en momentos específicos de estas fases.

## Fases del Ciclo de Vida

### Montaje (Mounting)

Es el proceso en el que un componente se inserta en el DOM. Los métodos relacionados son:

- `constructor()`
- `componentDidMount()`

### Actualización (Updating)

Cuando los `props` o el `state` cambian, el componente se actualiza. Los métodos relacionados son:

- `shouldComponentUpdate()`
- `componentDidUpdate()`

### Desmontaje (Unmounting)

Cuando el componente se elimina del DOM. El método relacionado es:

- `componentWillUnmount()`

## Métodos del Ciclo de Vida en Componentes de Clase

```jsx
class MiComponente extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
  }

  componentDidMount() {
    console.log("El componente se montó");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contador !== this.state.contador) {
      console.log("El componente se actualizó");
    }
  }

  componentWillUnmount() {
    console.log("El componente se va a desmontar");
  }

  render() {
    return <h1>Contador: {this.state.contador}</h1>;
  }
}
```

## Ciclo de Vida con Hooks en Componentes Funcionales

Los hooks como `useEffect` permiten realizar tareas en fases similares del ciclo de vida, como montar y actualizar.

```jsx
import React, { useState, useEffect } from 'react';

function MiComponente() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("El componente se montó");

    return () => {
      console.log("El componente se desmontó");
    };
  }, []);

  return <h1>Contador: {contador}</h1>;
}
```
