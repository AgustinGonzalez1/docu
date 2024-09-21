# Introducción a CSS

## ¿Qué es CSS?

CSS (Cascading Style Sheets) es un lenguaje de estilos que se utiliza para describir la presentación de un documento HTML. Permite separar el contenido (HTML) de la presentación, lo que facilita la modificación del diseño sin alterar la estructura del contenido.

## Cómo vincular CSS con HTML

Existen tres maneras de agregar CSS a un documento HTML:

### 1. CSS en línea (Inline CSS)

Agrega estilos directamente dentro de la etiqueta HTML mediante el atributo `style`.

```html
<p style="color: blue; font-size: 20px;">Este es un texto con estilo en línea.</p>
```

### 2. CSS Interno (Internal CSS)

Coloca los estilos dentro de la etiqueta `<style>` en el `<head>` del documento HTML.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo de CSS interno</title>
  <style>
    p {
      color: red;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <p>Este es un párrafo con CSS interno.</p>
</body>
</html>
```

### 3. CSS Externo (External CSS)

Se crea un archivo `.css` separado que se vincula al documento HTML mediante la etiqueta `<link>`.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo de CSS externo</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <p>Este es un párrafo con CSS externo.</p>
</body>
</html>
```

El archivo `styles.css` podría contener:

```css
p {
  color: green;
  font-size: 16px;
}
```
