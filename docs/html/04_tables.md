# Tablas en HTML

Las tablas en HTML permiten organizar datos en filas y columnas. La estructura básica de una tabla incluye las etiquetas `<table>`, `<tr>` (filas) y `<td>` (celdas).

```html
<table>
  <tr>
    <td>Fila 1, Columna 1</td>
    <td>Fila 1, Columna 2</td>
  </tr>
  <tr>
    <td>Fila 2, Columna 1</td>
    <td>Fila 2, Columna 2</td>
  </tr>
</table>
```

## Encabezados de tabla

Puedes usar la etiqueta `<th>` para definir encabezados de columna.

```html
<table>
  <tr>
    <th>Encabezado 1</th>
    <th>Encabezado 2</th>
  </tr>
  <tr>
    <td>Dato 1</td>
    <td>Dato 2</td>
  </tr>
</table>
```

## Atributos comunes de las tablas

- `colspan`: Permite que una celda se extienda a varias columnas.
- `rowspan`: Permite que una celda se extienda a varias filas.
