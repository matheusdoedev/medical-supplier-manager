# Medical Supplier Manager

It is a tool to manage medicines storage and data.

## Installation

### 1. Clone the project

```sh
git clone git@github.com:matheusdoedev/nextjs-boilerplate.git
```

## Running project in development mode

### 1. Install dependencies

```sh
npm install

yarn
```

### 2. Configure .env file

```env
NODE_ENV=development

VITE_INTERVIEW_API_URL=PUT_THE_URL_HERE
```

### 3. Run project

```sh
npm run dev

yarn dev
```

## Running project in production mode with Docker & Docker Compose

### 1. Configure .env file

```env
VITE_INTERVIEW_API_URL=PUT_THE_URL_HERE
```

### 2. Run with docker-compose

```sh
docker-compose up

# or in detach mode

docker-compose up -d
```

## Running project in production mode without Docker

### 1. Install dependencies

```sh
npm install

yarn
```

### 2. Configure .env file

```env
VITE_INTERVIEW_API_URL=PUT_THE_URL_HERE
```

### 3. Build project

```sh
npm run build

yarn build
```

### 4. Run project

```sh
npm preview

yarn preview
```

## Technologies

- [React](https://react.dev/)
- [React Query](https://tanstack.com/query/v3/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [Formik](https://formik.org/)
- [Material UI](https://mui.com/material-ui/)
- [Yup](https://github.com/jquense/yup)
- [Testing Library](https://testing-library.com/)
- [JSDOM](https://github.com/jsdom/jsdom)
- [Vitest](https://vitest.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Dockerfile](https://docs.docker.com/engine/reference/builder/)
- [Docker Compose](https://docs.docker.com/compose/)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
- [React Datepicker](https://reactdatepicker.com/)
- [React Spinners](https://www.npmjs.com/package/react-spinners)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Emotion](https://emotion.sh/docs/introduction)

## Contributing

1. Fork it (<git@github.com:matheusdoedev/pizza-army.git>)
2. Create your feature branch (`git checkout -b feat/fooBar`)
3. Commit your changes following conventional commits pattern (`git commit -am 'feat: add some feature'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Reques
