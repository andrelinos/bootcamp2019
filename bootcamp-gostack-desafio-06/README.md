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
