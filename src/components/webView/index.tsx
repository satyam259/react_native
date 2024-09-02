import React from 'react';
import { WebView } from 'react-native-webview';
import { View } from 'react-native';
import { styles } from './styles';
const WebViewScreen: React.FC<{ route: any }> = ({ route }) => {
  const { url } = route.params;
  return (
    <View style={styles.container}>
      <WebView source={{ uri: url }} style={styles.webView} />
    </View>
  );
};



export default WebViewScreen;
