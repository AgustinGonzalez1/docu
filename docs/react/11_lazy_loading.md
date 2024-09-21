# Lazy Loading y Suspense en React

## ¿Qué es Lazy Loading?

Lazy Loading permite cargar componentes de React solo cuando son necesarios, lo que mejora el rendimiento inicial de la aplicación.

### Uso de `React.lazy()`

`React.lazy()` permite importar componentes de manera dinámica.

```jsx
const ComponentePesado = React.lazy(() => import('./ComponentePesado'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
        <ComponentePesado />
      </Suspense>
    </div>
  );
}
```

## Suspense

`Suspense` se utiliza junto con `React.lazy()` para mostrar un fallback mientras el componente se está cargando.

```jsx
<Suspense fallback={<div>Loading...</div>}>
  <ComponentePesado />
</Suspense>
```
