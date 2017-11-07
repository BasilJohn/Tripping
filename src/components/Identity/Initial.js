import React from 'react';
import { Button, Block, BlockDetail } from '../common';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class Initial extends React.Component {
  static navigationOptions = {
    title: 'Setup',
    headerTintColor: '#F1F1F2',
    headerTitleStyle: { color: '#F1F1F2' }
  };

  render(props) {
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.parentStyle}>
        <View style={styles.childStyle}>
          <Button onPress={() => this.props.navigation.navigate('SignUp')} buttonText={'Sign Up'} />
        </View>
        <View style={styles.childStyle} >
          <Button onPress={() => this.props.navigation.navigate('Login')} buttonText={'Login'} />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  parentStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F2'
  },
  childStyle: {
    alignSelf: 'stretch',
    paddingTop: 5
  }
});

