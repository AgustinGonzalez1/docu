# Objetos y Arrays en JavaScript

## Objetos

Un objeto es una colección de pares clave-valor.

```js
let persona = {
  nombre: "Juan",
  edad: 30,
  saludar: function() {
    return "Hola, mi nombre es " + this.nombre;
  }
};

console.log(persona.saludar());
```

### Acceder y Modificar Propiedades

Puedes acceder y modificar las propiedades de un objeto usando notación de punto o corchetes.

```js
persona.edad = 31;
console.log(persona["edad"]); // 31
```

## Arrays

Los arrays son listas ordenadas de elementos.

```js
let frutas = ["Manzana", "Banana", "Naranja"];
console.log(frutas[0]); // "Manzana"
```

### Métodos de Arrays

- `push()`: Agrega un elemento al final del array.
- `pop()`: Elimina el último elemento del array.
- `shift()`: Elimina el primer elemento del array.
- `unshift()`: Agrega un elemento al principio del array.

```js
frutas.push("Mango");
console.log(frutas); // ["Manzana", "Banana", "Naranja", "Mango"]
```

### Iterar sobre Arrays

Puedes usar un bucle `for`, `forEach` o `map` para iterar sobre un array.

```js
frutas.forEach(function(fruta) {
  console.log(fruta);
});
```
