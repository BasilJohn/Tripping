import React from 'react';
import { TouchableOpacity, Text,StyleSheet } from 'react-native'


const Button = () => {
    return(
        <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.textStyle} >Get Started</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
   
    buttonStyle: {
       flex: 1,  
       alignSelf:'stretch',
       backgroundColor: '#fff',
       borderRadius: 5,
       borderWidth: 1,
       borderColor: '#007aff',
       marginLeft: 5,
       marginRight: 5
      
    },
    textStyle: {
        alignSelf:'center',
        color:'#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom : 10
    }
  
  });


export default Button;