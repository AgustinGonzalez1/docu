# Diseños y Posicionamiento en CSS

CSS ofrece varias formas de organizar y posicionar elementos en una página web.

## Display

La propiedad `display` define cómo se muestran los elementos en la página.

```css
div {
  display: block; /* Los elementos ocupan toda la línea */
  display: inline; /* Los elementos ocupan solo el espacio necesario */
  display: flex;   /* Utiliza el modelo Flexbox */
}
```

## Flexbox

Flexbox es un modelo de diseño unidimensional que facilita la alineación y distribución de espacio entre elementos dentro de un contenedor.

```css
.container {
  display: flex;
  justify-content: center; /* Alinea los elementos horizontalmente */
  align-items: center;     /* Alinea los elementos verticalmente */
}
```

## Grid

CSS Grid es un sistema de diseño bidimensional para crear layouts complejos.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr; /* Dos columnas con diferentes tamaños */
  grid-gap: 10px;                 /* Espacio entre los elementos del grid */
}
```

## Position

La propiedad `position` permite controlar cómo se posicionan los elementos en la página.

- `static`: Posicionamiento normal.
- `relative`: Se posiciona en relación con su posición original.
- `absolute`: Se posiciona en relación con el contenedor más cercano con `position: relative`.
- `fixed`: Se fija en relación con la ventana del navegador.

```css
div {
  position: absolute;
  top: 10px;
  left: 20px;
}
```

## Float

El `float` permite que un elemento "flote" a la izquierda o derecha de su contenedor, con el contenido siguiente fluyendo a su alrededor.

```css
img {
  float: left;
  margin-right: 10px;
}
```
