import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Input = (props) => {
    return(
        <View style={styles.parentStyle}>
        <View style={styles.childStyle}>  
             <Text >{props.inputText}</Text>
        </View>  
        <View style={styles.childStyle}>  
            <TextInput ></TextInput>
        </View>
        </View>    
    );
};

const styles = StyleSheet.create({
    parentStyle: {
       flex: 1,
       flexDirection: 'row',
       justifyContent: 'flex-start',
       flex:1
       },
       childStyle: {
        flex:2,
        width:null,
        height:50,
        alignSelf:'stretch',
        justifyContent:'center'
        }
  });



export default Input;