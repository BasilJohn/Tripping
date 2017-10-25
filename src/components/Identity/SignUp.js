import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity,Image,KeyboardAvoidingView } from 'react-native';
import Button from '../common/Button';
import Input from '../common/Input';
import Spinner from '../common/Spinner';
import Block from '../common/Block';
import BlockDetail from '../common/BlockDetail';
import firebase from 'firebase';

export default class SignUp extends React.Component {

    state= { email: '', password: '', error: '', loading: false };

    static navigationOptions = {
        title: 'Sign Up',

      };

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
     
    }
    onLoginFail() {
       
       this.setState({ loading: false, error: 'Authentication Failed' });
    }
    
    renderButton() {
        if (this.state.loading) {
          return <Spinner />;
            }
          return (<Button 
                   onPress={this.onPressButton.bind(this)} 
                   buttonText={'Create Profile'}/>);
    }
    
     
    render(props){
        
        return (
              <ScrollView >
              <KeyboardAvoidingView behavior="position" style={styles.form}>
               <Block>
                   <BlockDetail>
                   <TouchableOpacity style={styles.buttonStyle}>
                   <Image
                   style={styles.introImageStyle}
                   source={require('./IdentityImages/SimpleAdd.svg')}
                   />
                   </TouchableOpacity>
                   </BlockDetail>
                   <BlockDetail>
                   <View style={styles.parentStyle}>
                    <View style={styles.childStyle}>    
                    <Input 
                        placeholder={'user@gmail.com'} 
                        inputText={'Email'} 
                        value={this.state.email} 
                        onChangeText={text => this.setState({ email: text })} />
                    </View>
                    <View style={styles.childStyle} >    
                    <Input 
                        secureTextEntry
                        placeholder={'Password'} 
                        inputText={'Password'}
                        value={this.state.password}
                        onChangeText={text => this.setState({ password: text })} />
                    </View>
                    <View style={styles.childStyle} >    
                    <Input 
                    placeholder={'Username'} 
                    inputText={'Username'} />
                    </View>
                    <View style={styles.childStyle} >    
                    <Input 
                    placeholder={'Fullname'} 
                    inputText={'Fullname'} />
                    </View>
                    <Text style={styles.errorTextStyle}>
                    {this.state.error}
                    </Text>
                    <View style={styles.childStyle} >    
                     {this.renderButton()}
                    </View>
                    </View>
                   </BlockDetail>     
               </Block>
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
         },
         errorTextStyle: {
            color: 'red',
            alignSelf: 'center',
            fontSize: 20,
          }
   
   });