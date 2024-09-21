# El Modelo de Caja en CSS

El modelo de caja en CSS describe cómo los elementos son representados en la pantalla. Cada elemento se representa como una caja rectangular que consta de los siguientes componentes:

1. **Contenido**: El contenido del elemento, como texto o imágenes.
2. **Padding**: Espacio entre el contenido y el borde.
3. **Borde (Border)**: El borde alrededor del padding.
4. **Margen (Margin)**: Espacio fuera del borde.

```css
div {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
```

### Ejemplo visual del modelo de caja

```html
<div style="width: 200px; padding: 20px; border: 5px solid black; margin: 10px;">
  Este es un ejemplo del modelo de caja.
</div>
```

## Propiedades importantes del modelo de caja

- `padding`: Define el espacio entre el contenido y el borde.
- `margin`: Define el espacio fuera del borde.
- `border`: Define el grosor y estilo del borde.
