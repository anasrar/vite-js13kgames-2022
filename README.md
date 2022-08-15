# Vite js13kGames 2022

Using Vite for bundle game js13kGames.

## Features

- ### TypeScript
  If you want to use JavaScript just change entry point in `index.html` to JavaScript file.
  ```diff
  - <script type="module" src="/src/main.ts"></script>
  + <script type="module" src="/src/main.js"></script>
  ```
- ### Minify
  - Minify `index.html`
  - Mangler property start with underscore `/^_/`
    #### Source
    ```js title="source.js"
    class Foo {
    	_bar() {}
    }
    ```
    #### Build
    ```js title="build.js"
    class a {
    	b() {}
    }
    ```
  - CSS-in-JavaScript\
    You can disable in [vite.config.ts](vite.config.ts#L9)
  - Compress JavaScript using [Roadroller](https://github.com/lifthrasiir/roadroller)
  - Single `index.html`, inline JavaScript to `index.html`\
    You can disable in [vite.config.ts](vite.config.ts#L15)
- ### Zip
  Zip `build` folder to `dist/game.zip` and check the zip size
  #### Tips
  Use [Efficient Compression Tool](https://github.com/fhanau/Efficient-Compression-Tool) to reduce the zip file size, [Efficient Compression Tool](https://github.com/fhanau/Efficient-Compression-Tool) has prebuilt binary for Windows and macOS
  #### Usage
  ```bash
  ./ect.exe -9 -strip -zip ./dist/game.zip
  ```
  #### Docker compose
  You can use Docker and Docker Compose
  ```bash
  docker-compose up
  ```

## Getting Started

- ### Clone
  ```bash
  git clone https://github.com/anasrar/vite-js13kgames-2022
  ```
- ### Install Dependency
  #### NPM
  ```bash
  npm install
  ```
  #### Yarn
  ```bash
  yarn
  ```
- ### Development
  Development server in [localhost:5173](http://localhost:5173)
  #### NPM
  ```bash
  npm run dev
  ```
  #### Yarn
  ```bash
  yarn run dev
  ```
- ### Build
  - `index.html` in `build` folder
  - `game.zip` in `dist` folder
  #### NPM
  ```bash
  npm run build
  ```
  #### Yarn
  ```bash
  yarn run build
  ```
- ### Preview
  Preview build server in [localhost:4173](http://localhost:4173)
  #### NPM
  ```bash
  npm run preview
  ```
  #### Yarn
  ```bash
  yarn run preview
  ```

## Other Command

- ### Check Zip Size
  #### NPM
  ```bash
  npm run check
  ```
  #### Yarn
  ```bash
  yarn run check
  ```
- ### ESLint
  #### NPM
  ```bash
  npm run lint
  ```
  #### Yarn
  ```bash
  yarn run lint
  ```
- ### Prettier
  #### NPM
  ```bash
  npm run format
  ```
  #### Yarn
  ```bash
  yarn run format
  ```

## Project Structure

```
project
┣ build/     -- folder for build command
┣ dist/      -- folder for game.zip
┣ src/       -- folder for all source script
┣ public/    -- folder for static assets
┗ index.html -- entry point
```

## VSCode Chrome Debug

Start Chrome with `--remote-debugging-port=9222` to debug

```bash
chrome --remote-debugging-port=9222
```
