import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity,Image } from 'react-native';
import IdentityBlock from './IdentityBlock';
import ProfileHeader from './ProfileHeader';
import ProfileDetail from './ProfileDetail';
import Button from '../common/Button';

export default class SignUp extends React.Component {
    state = { email: '' ,password : ''}
    render(props){
        return (
           <ScrollView style={{ flex:1 }}>
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
                   <Button onPress={()=>console.log('Create Profile')} buttonText={'Create Profile'}/>  
               </IdentityBlock>    
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
     }
   
   });