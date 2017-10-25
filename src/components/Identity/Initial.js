import React from 'react';
import Button from '../common/Button';
import Block from '../common/Block';
import BlockDetail from '../common/BlockDetail';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';


 export default class Initial extends React.Component{
    static navigationOptions = {
        title: 'Setup',

      };

   render(props) {
    const { navigate } = this.props.navigation;
    return (
      
       <View style={styles.parentStyle}>
       <View style={styles.childStyle}>    
        <Button onPress={() => this.props.navigation.navigate('SignUp')}  buttonText={'Sign Up'} />
        </View>
        <View style={styles.childStyle} >    
        <Button onPress={() => this.props.navigation.navigate('Login')}  buttonText={'Login'} />
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
           alignSelf:'stretch',
           paddingTop:5
         }
   });

