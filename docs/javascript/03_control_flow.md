# Control de Flujo en JavaScript

## Condicionales

### `if`, `else if`, `else`

```js
let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
```

### `switch`

```js
let dia = 3;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  default:
    console.log("Día no válido");
}
```

## Bucles

### `for`

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### `while`

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### `do...while`

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```
