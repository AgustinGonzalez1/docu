# Selectores en CSS

## Selectores básicos

Los selectores se utilizan para apuntar a elementos específicos en un documento HTML y aplicarles estilos.

### Selector de etiquetas

Aplica estilos a todas las etiquetas de un tipo específico.

```css
p {
  color: blue;
}
```

### Selector de clases

Utiliza un punto `.` antes del nombre de la clase para seleccionar elementos.

```css
.texto-azul {
  color: blue;
}
```

En HTML:

```html
<p class="texto-azul">Este texto es azul.</p>
```

### Selector de IDs

Se utiliza un símbolo `#` para seleccionar un elemento único basado en su ID.

```css
#titulo {
  color: red;
}
```

En HTML:

```html
<h1 id="titulo">Este es el título</h1>
```

## Selectores avanzados

### Selectores de atributos

Aplica estilos a elementos que tienen un atributo específico.

```css
input[type="text"] {
  border: 1px solid black;
}
```

### Pseudo-clases

Aplica estilos en ciertos estados de los elementos.

```css
a:hover {
  color: red;
}
```

### Pseudo-elementos

Se utilizan para aplicar estilos a partes específicas de un elemento.

```css
p::before {
  content: "Prefijo: ";
}
```
