# _React TypeScript App without CRA_

## Run project

`npm start`

### Dependencies

```json
"devDependencies": {
    "@babel/core": "^7.17.2",
    "@babel/preset-env": "^7.16.11",
    "@babel/preset-react": "^7.16.7",
    "@babel/preset-typescript": "^7.16.7",
    "@types/react": "^17.0.39",
    "@types/react-dom": "^17.0.11",
    "babel-loader": "^8.2.3",
    "css-loader": "^6.6.0",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^5.5.0",
    "node-sass": "^7.0.1",
    "sass-loader": "^12.4.0",
    "style-loader": "^3.3.1",
    "ts-loader": "^9.2.6",
    "webpack": "^5.68.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.7.4"
  },
```

### .babelrc config

To use latest JavaScript features `"@babel/preset-env"`

To use all react features and sintax jsx `"@babel/preset-react"`

This plugin transforms static class properties as well as properties declared with the property initializer syntax `@babel/plugin-proposal-class-properties`

Describes the environments you support/target for your project. `"targets": { "node": "current" }`

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": { "node": "current" }
      }
    ],
    "@babel/react",
    "@babel/preset-typescript"
  ],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

More info:

[Setup a React App using Webpack, Babel and TypeScript](https://dev.to/deadwing7x/setup-a-react-app-using-webpack-babel-and-typescript-5927)

[React sin create-react-app | Aplicación de Series y Peliculas con OMDB](https://www.youtube.com/watch?v=SJwWQATQGvc&t=2385s)
