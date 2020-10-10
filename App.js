import React, {Component} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import MainStackNavigator from './src/navigation/MainStackNavigator';

export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#612D5D" />
        <SafeAreaView
          style={{flex: 1}}
          forceInset={{top: 'never', bottom: 'never'}}>
          <MainStackNavigator />
        </SafeAreaView>
      </>
    );
  }
}
