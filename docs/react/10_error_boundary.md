# Manejo de Errores en React con Error Boundaries

## ¿Qué es un Error Boundary?

Un "Error Boundary" es un componente de React que captura errores en la fase de renderizado, en métodos del ciclo de vida y en constructores de sus hijos.

### Crear un Error Boundary

Los Error Boundaries solo pueden ser creados usando componentes de clase.

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error capturado:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ocurrió un error.</h1>;
    }

    return this.props.children;
  }
}
```

### Uso de un Error Boundary

Envuelve cualquier componente en un `ErrorBoundary` para manejar errores.

```jsx
<ErrorBoundary>
  <MiComponente />
</ErrorBoundary>
```

## Limitaciones de Error Boundaries

Los Error Boundaries no pueden capturar errores que ocurren en:

- Event listeners
- Código asíncrono (como `setTimeout`)
- Código fuera del ciclo de renderizado de React
