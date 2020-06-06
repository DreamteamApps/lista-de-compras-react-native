/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, ActivityIndicator} from 'react-native';
import {PersistGate} from 'redux-persist/lib/integration/react';
import Navigation from './src/screens/navigation';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store';
import Modal from './src/components/Modal/index';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <Provider store={store}>
          <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
            <Modal />
            <Navigation />
          </PersistGate>
        </Provider>
      </SafeAreaView>
    </>
  );
};

export default App;
