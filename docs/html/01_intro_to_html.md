# Introducción a HTML

## ¿Qué es HTML?

HTML (HyperText Markup Language) es el lenguaje estándar para crear páginas web. Se utiliza para estructurar contenido en la web y definir la presentación de texto, imágenes, videos y otros elementos interactivos.

## Estructura básica de un documento HTML

A continuación, te mostramos la estructura más básica y actual de un documento HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <!-- Aquí va el contenido de la página -->
</body>
</html>
```

### Explicación de cada sección:

- `<!DOCTYPE html>`: Instrucción que le dice al navegador que se trata de un documento HTML5.
- `<html lang="en">`: Esta etiqueta envuelve todo el contenido de la página y el atributo `lang` indica el idioma.
- `<head>`: Contiene información sobre la página (meta-información) que no se muestra en el cuerpo de la página.
- `<meta charset="UTF-8">`: Define la codificación de caracteres como UTF-8, lo cual es importante para mostrar correctamente los caracteres especiales.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Hace que la página se vea bien en dispositivos móviles.
- `<title>`: El título que se mostrará en la pestaña del navegador.
- `<body>`: Contiene todo el contenido visible de la página web, como texto, imágenes, enlaces, etc.

## Ejemplo de uso

A continuación, te mostramos un ejemplo simple de un documento HTML con un título y un párrafo:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi primera página</title>
</head>
<body>
  <h1>Bienvenidos a mi página web</h1>
  <p>Este es un párrafo de ejemplo.</p>
</body>
</html>
```

En este ejemplo, hemos agregado un título con la etiqueta `<h1>` y un párrafo con la etiqueta `<p>`. Estos son elementos básicos que encontrarás en casi todas las páginas web.
