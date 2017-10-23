import React from 'react';
import Button from '../common/Button';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';


 export default class Initial extends React.Component{
    
   render() {
    return (
       <View style={styles.parentStyle}>
       <View style={styles.childStyle}>    
        <Button  buttonText={'Sign Up'} />
        </View>
        <View style={styles.childStyle} >    
        <Button buttonText={'Login'} />
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

