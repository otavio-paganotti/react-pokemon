# react-pokemon

![image](https://user-images.githubusercontent.com/22649066/233890471-75a158b1-ea0b-46d3-85c8-834c59da6f35.png)

## Description

React app to display information about Pokemons.

## Installation

1. Clone the repository
2. Install dependencies using yarn:

```bash
yarn install
```

## Usage

To run the app in development mode:

```bash
yarn dev
```

To build the app:

```bash
yarn build
```

To preview the built app:

```bash
yarn preview
```

To run lint:

```bash
yarn lint
```

To run prettier:

```bash
yarn prettier
```

To run prettier on staged files:

```bash
yarn prettier-staged
```

To check TypeScript types:

```bash
yarn checkTs
```

To run unit tests:

```bash
yarn test:unit
```

To run unit tests with coverage:

```bash
yarn test:unit:coverage
```

To watch unit tests:

```bash
yarn test:unit:watch
```

To run UI tests:

```bash
yarn test:ui
```

### Dependencies

- axios
- clsx
- react
- react-dom
- react-router-dom

### Dev Dependencies

- @commitlint/cli
- @commitlint/config-conventional
- @types/node
- @types/react
- @types/react-dom
- @types/react-test-renderer
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- @vitejs/plugin-react-swc
- @vitest/ui
- autoprefixer
- cross-env
- devmoji
- eslint
- eslint-config-prettier
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- flush-promises
- git-branch-is
- happy-dom
- husky
- lint-staged
- postcss
- postcss-import
- postcss-nested
- prettier
- pretty-quick
- react-test-renderer
- sass
- typescript
- vite
- vitest

### Node version

This app requires Node.js version >=18.x

### Instalation with Docker Compose Example with Nginx and App

This is an example `docker-compose.yml` file that runs an App and an Nginx server with automated SSL certificates using Certbot.

#### Requirements

- Docker
- Docker Compose

#### Usage

1. Clone the repository
2. Create a `.env` file and fill it with your desired environment variables.
3. Run `docker-compose up -d` to start the containers.
4. Access your App at `http://localhost:${VITE_PORT}`.
5. Access your Nginx server at `https://your-domain.com`.

Note: Make sure to replace `your-domain.com` with your actual domain name.

#### Docker Compose File

```yml
version: '3.4'

services:
  app:
    restart: unless-stopped
    ports:
      - ${VITE_PORT}:${VITE_PORT}
      - 3000
    env_file:
      - .env
    build:
      context: .
    environment:
      - VITE_SECRET=${VITE_SECRET}

  nginx:
    restart: unless-stopped
    image: staticfloat/nginx-certbot
    ports:
      - 80:80/tcp
      - 443:443/tcp
    environment:
      - CERTBOT_DOMAIN=${CERTBOT_DOMAIN}
      - CERTBOT_EMAIL=${CERTBOT_EMAIL}
      - ENVSUBST_VARS=CERTBOT_DOMAIN
    volumes:
      - letsencrypt:/etc/letsencrypt
      - ./nginx.conf:/etc/nginx/user.conf.d/nginx.conf:ro
    depends_on:
      - app

volumes:
  letsencrypt:
```

### Cloudflare Pages

This project is hosted on Cloudflare Pages because it provides fast and reliable website hosting through a global network of servers, with easy setup and integration with other Cloudflare services.

### Jest vs Vitest

This project use [Vitest](https://vitest.dev/) against [Jest](https://jestjs.io/pt-BR/) because the all project is bundled by [Vite](https://vitejs.dev/). 

Vitest is a lightweight testing framework for JavaScript applications, designed to make testing simple and efficient. It offers a sleek and modern user interface for running tests, with easy-to-read test results and error messages. Vitest is highly customizable and integrates seamlessly with a variety of JavaScript frameworks and build tools. With Vitest, developers can write and execute unit tests and functional tests with ease. It's a good alternative for other popular testing frameworks like Jest or Mocha, offering flexibility and performance in testing your application.

Vitest is a tool very similar to Jest (it was based on it), in terms of architecture and syntax, so this tool was chosen to run the tests simply because the bundler we use is Vite.

### Code coverage

![image](https://user-images.githubusercontent.com/22649066/233892441-a9a8735b-7346-4c4a-9e82-4d829466ec86.png)

### License

This project is licensed under the MIT License.