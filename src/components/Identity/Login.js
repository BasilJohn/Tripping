import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Button, Input, Spinner, Block, BlockDetail } from '../common';
import MainFeed from '../Initial/MainFeed';
import firebase from 'firebase';



export default class Login extends React.Component {

  state = { email: '', password: '', error: '', loading: false, loggedIn: false };

  static navigationOptions = {
    title: 'Login',
    headerTintColor: 'black',
    headerTitleStyle: { color: 'black' }
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  onLoginButtonPress() {

    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
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

  }
  onLoginFail() {
    this.setState({
      loading: false,
      error: 'Authentication Failed',
      loggedIn: false
    });

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
        return <MainFeed />;
      case false:
        return (
          <KeyboardAvoidingView behavior="position" >
            <Block>
              <BlockDetail>
                <Input
                  placeholder={'user@gmail.com'}
                  inputText={'Email'}
                  value={this.state.email}
                  onChangeText={text => this.setState({ email: text })} />
                <Input
                  secureTextEntry
                  placeholder={'Password'}
                  inputText={'Password'}
                  value={this.state.password}
                  onChangeText={text => this.setState({ password: text })} />
                <Text style={styles.errorTextStyle}>
                  {this.state.error}
                </Text>
                <View >
                  {this.renderButton()}
                </View>
              </BlockDetail>
            </Block>
          </KeyboardAvoidingView>);
      default:
        return (<Spinner />);
    }
  }

  render(props) {
    return (
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {this.renderContent()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  errorTextStyle: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 20,
  },
  contentContainerStyle: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

});