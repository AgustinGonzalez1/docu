# Animaciones y Transiciones en CSS

## Transiciones

La propiedad `transition` permite cambiar valores de propiedades de CSS suavemente durante un tiempo.

```css
button {
  background-color: blue;
  transition: background-color 0.5s ease;
}

button:hover {
  background-color: red;
}
```

## Animaciones

Las animaciones se definen con la regla `@keyframes` y pueden aplicarse a los elementos con la propiedad `animation`.

```css
@keyframes mover {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100px);
  }
}

div {
  animation: mover 2s infinite;
}
```

### Propiedades de Animación

- `animation-name`: Nombre de la animación.
- `animation-duration`: Duración de la animación.
- `animation-timing-function`: Curva de velocidad de la animación (ease, linear, etc.).
- `animation-iteration-count`: Número de veces que se repetirá la animación (o `infinite`).

## Pseudo-clases y Pseudo-elementos

### Pseudo-clases (`:hover`, `:active`)

Se usan para definir un estado particular de un elemento.

```css
button:hover {
  background-color: green;
}
```

### Pseudo-elementos (`::before`, `::after`)

Permiten insertar contenido antes o después de un elemento.

```css
p::before {
  content: "Prefijo: ";
}
```
