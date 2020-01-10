import React from 'react';
import PropTypes from 'prop-types';

// import { WebView } from 'react-native-webview';

import { Browser } from './styles';

export default function Repo({ navigation }) {
  const repository = navigation.getParam('repository');

  return <Browser source={{ uri: repository.html_url }} />;
}
Repo.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('repository').name,
});

Repo.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
