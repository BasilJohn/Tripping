import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Provider } from 'react-redux';
import { createStore ,applyMiddleware } from 'redux';
import Opening from './src/components/opening';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';


export default class App extends React.Component {

  componentDidMount() {
    var config = {
      apiKey: "AIzaSyCU7bSoXbTGGydNHBYHYkJKBRl3F-dkuAE",
      authDomain: "tripping-22ff3.firebaseapp.com",
      databaseURL: "https://tripping-22ff3.firebaseio.com",
      projectId: "tripping-22ff3",
      storageBucket: "tripping-22ff3.appspot.com",
      messagingSenderId: "789650220393"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store=createStore(reducers,{},applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Opening />
      </Provider>
    );
  }
}


