# Introducción a React

## ¿Qué es React?

React es una biblioteca de JavaScript para construir interfaces de usuario. Se centra en la creación de componentes reutilizables y en la actualización eficiente de la interfaz de usuario cuando los datos cambian.

## ¿Por qué React?

- **Componente basado**: Divide la UI en pequeños componentes reutilizables.
- **Actualización eficiente**: React actualiza solo las partes necesarias de la página gracias al virtual DOM.
- **Unidireccional**: El flujo de datos es de arriba hacia abajo (de los padres a los hijos).

### Ejemplo básico de un componente React

```jsx
import React from 'react';

function Saludo() {
  return <h1>¡Hola Mundo!</h1>;
}

export default Saludo;
```

En este ejemplo, creamos un componente funcional `Saludo` que retorna un mensaje de "¡Hola Mundo!".
