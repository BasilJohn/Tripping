import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import Opening from './src/components/opening';
import firebase from 'firebase';


export default class App extends React.Component {

  componentDidMount(){
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
    return (
      
      <Opening/>
    );
  }
}


