import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Opening from './src/components/opening';
import firebase from 'firebase';


export default class App extends React.Component {

  componentDidMount(){
    var config = {
      apiKey: "AIzaSyCs7EyTcD46_Z7le_y8mxxPZER9kFfDwXQ",
      authDomain: "auth-a6163.firebaseapp.com",
      databaseURL: "https://auth-a6163.firebaseio.com",
      projectId: "auth-a6163",
      storageBucket: "auth-a6163.appspot.com",
      messagingSenderId: "948315515488"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Opening/>
    );
  }
}


