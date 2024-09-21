# Formularios en HTML

Los formularios permiten a los usuarios ingresar información que luego puede ser enviada al servidor. La estructura básica incluye la etiqueta `<form>` y varios tipos de entradas (`input`).

```html
<form action="/enviar-datos" method="POST">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre">
  <input type="submit" value="Enviar">
</form>
```

## Tipos de entradas

Algunos de los tipos más comunes de entradas son:

- `text`: Para campos de texto.
- `password`: Para contraseñas.
- `email`: Para correos electrónicos.
- `submit`: Botón para enviar el formulario.

### Ejemplo de un formulario más complejo:

```html
<form action="/enviar" method="POST">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre"><br>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email"><br>
  
  <label for="comentarios">Comentarios:</label>
  <textarea id="comentarios" name="comentarios"></textarea><br>
  
  <input type="submit" value="Enviar">
</form>
```
