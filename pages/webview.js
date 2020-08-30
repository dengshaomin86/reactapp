import React from 'react';
import {StatusBar, StyleSheet, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';
import bridge from './../assets/bridge';

const statusBarHeight = StatusBar.currentHeight;

// 获取设备的宽度和高度
const {height: deviceHeight, width: deviceWidth} = Dimensions.get('window');

let html = null;
// 注入一个方法并绑定给 window.launchScan 以备 RN 调用
const js = `
window.launchScan = function(){
}
`;

let source = 'file:///android_asset/web/index.html';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={'transparent'}
      />
      <WebView
        // source={{uri: 'http://192.168.5.122:8080/#/assets'}}
        source={{uri: source}}
        style={styles.webview}
        ref={(webview) => {
          html = webview;
        }}
        injectedJavaScript={js}
        onLoadEnd={onLoadEnd}
        onMessage={onMessage}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scalesPageToFit={true}
      />
    </>
  );
};

const styles = StyleSheet.create({
  webview: {
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: '#fff000',
    // flex: 1,
  },
});

//接收来自H5的消息
const onMessage = (e) => {
  console.log('WebView onMessage 收到H5参数：', e.nativeEvent.data);
  let params = e.nativeEvent.data;
  try {
    params = JSON.parse(params);
  } catch (err) {
    console.log(err);
  }
  if (typeof params === 'object') {
    if (bridge[params.fn]) {
      bridge[params.fn](params.data);
    }
  }
};

const onLoadEnd = (e) => {
  console.log('WebView onLoadEnd e：', e.nativeEvent);
  let data = {
    setStatusBar: statusBarHeight,
  };
  html && html.postMessage(JSON.stringify(data)); // 发送消息到H5
};

export default App;
