import React from 'react';
import { Button, Block, BlockDetail } from '../common';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class Initial extends React.Component {
  static navigationOptions = {
    title: 'Setup',
    headerTintColor: 'black',
    headerTitleStyle: { color: 'black' }
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
  },
  childStyle: {
    alignSelf: 'stretch',
    paddingTop: 5
  }
});

