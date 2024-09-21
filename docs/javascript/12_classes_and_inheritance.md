# Clases y Herencia en JavaScript

## Clases

Las clases en JavaScript son plantillas para crear objetos. Puedes definir clases usando la palabra clave `class`.

```js
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log("Hola, mi nombre es " + this.nombre);
  }
}

let juan = new Persona("Juan", 30);
juan.saludar();
```

## Herencia

Una clase puede heredar de otra clase usando la palabra clave `extends`.

```js
class Estudiante extends Persona {
  constructor(nombre, edad, grado) {
    super(nombre, edad);
    this.grado = grado;
  }

  estudiar() {
    console.log(this.nombre + " está estudiando en el grado " + this.grado);
  }
}

let ana = new Estudiante("Ana", 22, "Universidad");
ana.saludar();
ana.estudiar();
```
