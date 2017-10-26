import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import Input from '../common/Input';
import Button from '../common/Button';
import Spinner from '../common/Spinner';
import Block from '../common/Block';
import BlockDetail from '../common/BlockDetail';
import IntialSetup from '../Initial/InitialSetup';
import firebase from 'firebase';



export default class Login extends React.Component {

  state = { email: '', password: '', error: '', loading: false, loggedIn: false };

  static navigationOptions = {
    title: 'Sign Up',
  };
  //componentWillMount () {
  //firebase.auth().onAuthStateChanged((user) => {
  //if (user) {
  //console.log(user.email);
  //this.setState({ loggedIn: true });
  //} else {
  //console.log('false');
  //this.setState({ loggedIn: false });
  //}
  //});
  //}

  onLoginButtonPress() {

    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    console.log(email, password);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
  }
  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
      loggedIn: true
    });
    console.log(this.state.loggedIn);
  }
  onLoginFail() {
    this.setState({
      loading: false,
      error: 'Authentication Failed',
      loggedIn: false
    });
    console.log(this.state.loggedIn);
  }
  renderButton() {
    if (this.state.loading) {
      return <Spinner />;
    }
    return (<Button onPress={this.onLoginButtonPress.bind(this)} buttonText={'Login'} />);
  }

  renderContent() {

    switch (this.state.loggedIn) {
      case true:
        return <IntialSetup />;
      case false:
        return (<ScrollView>
          <KeyboardAvoidingView behavior="position" style={styles.form}>
            <Block>
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
        </ScrollView>);
      default:
        return (<Spinner />);
    }
  }

  render(props) {
    return (
      <ScrollView >
        {this.renderContent()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  parentStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  childStyle: {
    alignSelf: 'stretch',
    paddingTop: 5,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    height: 50
  },
  errorTextStyle: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 20,
  }

});