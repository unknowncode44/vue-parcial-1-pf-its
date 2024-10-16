# Parcial #1. Carrera TSDSF 2do.

Ejercicio usando vue 3 composition API + Pinia Store + Vue Router

El ejercicio practico consta de:
- Creacion de un modelo para el estado del carro, llamar CartStateModel, colocar en carpeta de modelos. El mismo debera contar con un atributo "loading" boolean para manejar situaciones de carga, un atributo "data" que representara un array de los libros en el carro y un atributo "total" que representara el total del costo de los libros en el carro.
  
- Creacion de una store con pinia que implemente el modelo anterior usando Typescript. Definir el estado inicial en falso, vacio y 0 (cero). Se deberan crear acciones para agregar, quitar, sumar, restar, obtener la cantidad, todo con typescript. las funciones de sumar y restar deberan devolver (retornar) types, ya sea number o el que aplique si es que aplica otra cosa.

- Creacion de un CartComponent, un componente que aplique el estado del carro en el cual se pueda visualizar la cantidad de items, se pueda quitar items y se visualice el total del costo de los items en el carro, la logica de estas acciones deberia venir pura y exclusivamente de las acciones creadas en el store. Lo que se sucede en CartComponent debe ser reactivo, es decir si agregamos o quitamos, el cambio tiene que ser visualizado de inmediato, tanto en cantidad de items como en costo de los mismos. Se calificara un correcto uso de estilos, estrucutura y logica.


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
