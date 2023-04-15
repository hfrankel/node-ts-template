# Node.js TypeScript Template

This is a basic template for building Node.js applications with TypeScript. It includes all the necessary files and configurations to get started with TypeScript in Node.js.

## Getting Started

To get started with this template, follow these steps:

```
1. Clone the repository:

git clone https://github.com/your-username/node-typescript-template.git
```

```
2. Install the dependencies:

npm install
```

```
3. Build the application:

npm run build
```

```
4. Start the application:

npm start
```

The application should now be running on http://localhost:3000.

## Project Structure

The project structure is as follows:

node-typescript-template/
dist/ # Compiled TypeScript code
src/ # TypeScript source code
index.ts # Main entry point for the application
.gitignore # Git ignore file
package.json # Node.js package file
tsconfig.json # TypeScript configuration file


## TypeScript Configuration

This template includes a `tsconfig.json` file that defines the TypeScript compiler options. The default configuration includes the following options:

```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "sourceMap": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

## Scripts

This template includes the following npm scripts:

- `build`: Compiles the TypeScript code to JavaScript and outputs it to the `dist` directory.
- `start`: Runs the application from the compiled JavaScript code in the `dist` directory.
- `dev`: Runs the application in development mode with auto-reloading on code changes using `nodemon`.
- `test`: Runs the test suite using `jest`.