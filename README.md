# Repro vue-router

I made this simple repo to reproduce the issue in version 4.3.1 where router.resolve wouldn't keep query params.
To reproduce the issue, `npm i && npm run dev`, then click on the "about" button, and click on "Set query param".
You will notice that nothing happens.

If you change the version of vue-router in package.json to 4.3.0, and do the same thing, when clicking "Set query param",
the URL will change and "Query params exists !" will appear.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
