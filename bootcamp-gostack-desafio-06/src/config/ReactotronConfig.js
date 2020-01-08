import Reactotron from 'reactotron-react-native';
/**
 * Redirecionar porta para Android/Emulador
 * adb reverse tcp:9090 tcp:9090
 *
 * Para usar celular real
 * Reactotron.configure({ host: 'IP máquina real' })
 */

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
