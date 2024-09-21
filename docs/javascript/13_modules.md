# Módulos en JavaScript

Los módulos en JavaScript permiten dividir el código en archivos separados y reutilizarlos fácilmente.

## Exportar y Importar Módulos

### Exportación

Puedes exportar funciones, objetos o variables usando la palabra clave `export`.

```js
// archivo.js
export const PI = 3.14;
export function saludar() {
  console.log("Hola desde el módulo");
}
```

### Importación

Para importar módulos, usa la palabra clave `import`.

```js
// main.js
import { PI, saludar } from './archivo.js';

console.log(PI);
saludar();
```

## Exportación por defecto

También puedes exportar un valor por defecto.

```js
// archivo.js
export default function() {
  console.log("Función por defecto");
}
```

```js
// main.js
import funcion from './archivo.js';
funcion();
```
