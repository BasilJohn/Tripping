import React from 'react';
import { View, Text,TextInput, StyleSheet } from 'react-native';
import Input from '../common/Input';

export default class ProfileDetail extends React.Component{
   render(props) {
    return (
       <View style={styles.parentStyle}>
       <View style={styles.childStyle}>    
        <Input placeholder={'user@gmail.com'} inputText={'EMAIL'} />
        </View>
        <View style={styles.childStyle} >    
        <Input placeholder={'Password'} inputText={'PASSWORD'} />
        </View>
        <View style={styles.childStyle} >    
        <Input placeholder={'Username'} inputText={'USERNAME'} />
        </View>
        <View style={styles.childStyle} >    
        <Input secureTextEntry={true} placeholder={'Fullname'} inputText={'FULLNAME'} />
        </View>
      </View>
    );
   }
};

const styles = StyleSheet.create({
     parentStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        },
        childStyle: {
           alignSelf:'stretch',
           paddingTop:5,
           borderColor: '#ddd',
           borderBottomWidth:1,
         }
   });

