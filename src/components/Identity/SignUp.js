import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity,Image,KeyboardAvoidingView } from 'react-native';
import IdentityBlock from './IdentityBlock';
import ProfileHeader from './ProfileHeader';
import ProfileDetail from './ProfileDetail';
import Button from '../common/Button';
import Input from '../common/Input';
import firebase from 'firebase';

export default class SignUp extends React.Component {

    state= { email: '', password: '', error: '', loading: false };
    onPressButton ()  {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
           firebase.auth().createUserWithEmailAndPassword(email, password)
           .then(this.onLoginSuccess.bind(this))
           .catch(this.onLoginFail.bind(this));
           });
    }
    onLoginSuccess() {
        this.setState({ 
        email: '',
        password: '',
        loading: false,
        error: ''
     });
     console.log('success');
    }
    onLoginFail() {
        console.log(this.email,this.password);
       this.setState({ loading: false, error: 'Authentication Failed' });
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
                   <ProfileDetail>
                   <View style={styles.parentStyle}>
                    <View style={styles.childStyle}>    
                    <Input 
                        placeholder={'user@gmail.com'} 
                        inputText={'EMAIL'} 
                        value={this.state.email} 
                        onChangeText={text => this.setState({ email: text })} />
                    </View>
                    <View style={styles.childStyle} >    
                    <Input placeholder={'Password'} 
                        inputText={'PASSWORD'}
                        value={this.state.password}
                        onChangeText={text => this.setState({ password: text })} />
                    </View>
                    <View style={styles.childStyle} >    
                    <Input placeholder={'Username'} inputText={'USERNAME'} />
                    </View>
                    <View style={styles.childStyle} >    
                    <Input secureTextEntry={true} placeholder={'Fullname'} inputText={'FULLNAME'} />
                    </View>
                    <View style={styles.childStyle} >    
                     <Button onPress={this.onPressButton.bind(this)} buttonText={'Create Profile'}/>
                    </View>
                    </View>
                   </ProfileDetail>     
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