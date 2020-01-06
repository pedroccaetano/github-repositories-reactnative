import React from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

export default function Repositories({ navigation }) {
  return <WebView source={{ uri: navigation.state.params.url }} />;
}

Repositories.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }).isRequired,
};

Repositories.navigationOptions = {
  title: 'Repositório',
};
