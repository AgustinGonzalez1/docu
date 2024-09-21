# React Router

## ¿Qué es React Router?

React Router es una biblioteca que permite manejar rutas en aplicaciones React. Es útil para crear aplicaciones de una sola página (SPA), donde diferentes componentes se renderizan en función de la URL.

### Instalación

Para instalar React Router, ejecuta el siguiente comando:

```bash
npm install react-router-dom
```

## Configuración básica de Rutas

### `BrowserRouter` y `Route`

El componente `BrowserRouter` debe envolver toda la aplicación, y `Route` se utiliza para definir qué componentes se renderizan en qué rutas.

```jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
```

### Navegación entre Rutas

Puedes utilizar el componente `Link` para navegar entre las rutas sin recargar la página.

```jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
```

## Rutas Dinámicas

Puedes utilizar rutas dinámicas con parámetros en la URL.

```jsx
import { useParams } from 'react-router-dom';

function Product() {
  const { id } = useParams();
  return <h1>Producto {id}</h1>;
}

// En el Router
<Route path="/product/:id" element={<Product />} />
```

## Rutas Protegidas

Para proteger rutas y solo permitir acceso a usuarios autenticados, puedes usar el siguiente patrón.

```jsx
function ProtectedRoute({ element }) {
  const isAuthenticated = // Lógica para verificar si el usuario está autenticado

  return isAuthenticated ? element : <Navigate to="/login" />;
}

<Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
```
