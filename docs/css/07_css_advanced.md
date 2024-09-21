# Propiedades Avanzadas de CSS

## Grid Layout

CSS Grid Layout es un sistema de diseño bidimensional que permite crear diseños en cuadrícula complejos. Puedes definir columnas y filas utilizando las propiedades `grid-template-columns` y `grid-template-rows`.

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 200px;
  gap: 10px;
}
```

## Scroll Snap

`scroll-snap` permite controlar cómo los elementos se alinean durante el desplazamiento.

```css
.container {
  scroll-snap-type: y mandatory;
}

.item {
  scroll-snap-align: start;
}
```

## Media Queries Avanzadas

Las media queries permiten cambiar el diseño de la página en función del tamaño de la pantalla. También pueden utilizarse para mejorar la accesibilidad o manejar orientaciones específicas.

```css
@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}

@media (prefers-reduced-motion: reduce) {
  .animacion {
    animation: none;
  }
}
```

## Transiciones y Transformaciones

### Transiciones

Las transiciones permiten cambiar propiedades de CSS de forma suave.

```css
.button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: green;
}
```

### Transformaciones

Puedes transformar elementos en el espacio tridimensional.

```css
.caja {
  transform: rotate(45deg) translateX(50px);
}
```

## Animaciones Avanzadas

Las animaciones permiten crear movimientos más complejos. Algunas propiedades avanzadas incluyen `animation-fill-mode` y `animation-iteration-count`.

```css
@keyframes mover {
  0% { transform: translateX(0); }
  100% { transform: translateX(100px); }
}

.elemento {
  animation: mover 2s infinite;
  animation-fill-mode: forwards;
  animation-iteration-count: 3;
}
```

