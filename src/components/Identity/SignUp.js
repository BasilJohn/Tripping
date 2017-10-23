import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity,Image,KeyboardAvoidingView } from 'react-native';
import IdentityBlock from './IdentityBlock';
import ProfileHeader from './ProfileHeader';
import ProfileDetail from './ProfileDetail';
import Button from '../common/Button';
import firebase from 'firebase';

export default class SignUp extends React.Component {

    state = { email: '' ,password : ''}
    onPressButton ()  {
        console.log('createProfile')
       // firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password);
    }
   
    render(props){
        return (
              <ScrollView >
              <KeyboardAvoidingView behavior="position" style={styles.form}>
               <IdentityBlock>
                   <ProfileHeader>
                   <TouchableOpacity style={styles.buttonStyle}>
                   <Image
                   style={styles.introImageStyle}
                   source={require('./IdentityImages/SimpleAdd.svg')}
                   />
                   </TouchableOpacity>
                   </ProfileHeader>
                   <ProfileDetail /> 
                   <Button onPress={this.onPressButton.bind(this)} buttonText={'Create Profile'}/>  
               </IdentityBlock>
              </KeyboardAvoidingView>
               </ScrollView>    

        );
    }
}

const styles = StyleSheet.create({
    
     buttonStyle: { 
        borderColor: '#ddd',
        borderBottomWidth:0,
        backgroundColor: '#fff',
        height: 160,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
     },
     introImageStyle: {
        flex: 1,
        alignSelf: 'center',
        width: 80,
        height: undefined
     },
     form: {
        flex: 2,
        justifyContent: 'space-between',
      },
   
   });