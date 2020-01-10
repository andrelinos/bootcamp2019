# Instalações iniciais
- react-native init nomepasta

# Intens adicionado
- yarn add prettier -D
- yarn add eslint-config-prettier -D
- yarn add eslint-plugin-prettier -D
- yarn add babel-eslint -D
- yarn add reactotron-react-native

-- Consultar site oficial: https://reactnavigation.org/docs/en/getting-started.html
- yarn add react-navigation
- yarn add react-native-reanimated
- yarn add react-native-gesture-handler
- yarn add react-native-screens
- yarn add react-native-safe-area-context
- yarn add react-navigation-stack

- yarn add @react-native-community/masked-view
- yarn add styled-components
- yarn add react-native-vector-icons
- yarn add axios
- yarn add @react-native-community/async-storage
- yarn add prop-types
- yarn add react-native-webview

#Configurações personalizada
## .prettierrc
```{
  "singleQuote": true,
  "trailingComma": "es5"
}```

## .eslintrc.js
``` 
module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'react/state-in-constructor': 'off',
    'react/static-property-placement': ['off',
    'property assignment'],
    'react/static-property-placement': ['error',
    'static public field'],
    'react/sort-comp': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js']
      }
    ],
    'import/prefer-default-export': 'off'
  },
};
```

## .editorconfig
```
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```


# Imprementações para Android
- implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
- implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'


# Redirecionamento portas

 ## Redirecionar porta para Android/Emulador
 - adb reverse tcp:9090 tcp:9090

 ## Para usar celular real
- Reactotron.configure({ host: 'IP máquina real' })

# Comandos (versão 0.60 do react native)
- yarn add jetifier
- npx jetify

# Para executar
- react-native run-android (criar ou recriar aplicação completo)
- react-native start (para iniciar aplicação com bundle já criado)
- react-native start --reset-cache (recarregar por completo)
