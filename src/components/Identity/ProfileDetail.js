import React from 'react';
import { View, Text,TextInput, StyleSheet } from 'react-native';
import Input from '../common/Input';

export default class ProfileDetail extends React.Component{
   render(props) {
    return (
       <View style={styles.parentStyle}>
       <View style={styles.childStyle}>    
        <Input inputText={'EMAIL'} />
        </View>
        <View style={styles.childStyle} >    
        <Input inputText={'PASSWORD'} />
        </View>
        <View style={styles.childStyle} >    
        <Input inputText={'USERNAME'} />
        </View>
        <View style={styles.childStyle} >    
        <Input inputText={'FULLNAME'} />
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

