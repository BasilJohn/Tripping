import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Block, BlockDetail, Button, Input, Spinner } from '../common';
import firebase from 'firebase';
const keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0
export default class SignUp extends React.Component {

    state = { email: '', password: '', error: '', loading: false };

    static navigationOptions = {
        title: 'Sign Up',
        headerTintColor: '#F1F1F2',
        headerTitleStyle: { color: '#F1F1F2' }
    };

    onPressButton() {
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
            buttonText={'Create Profile'} />);
    }


    render(props) {

        return (
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <KeyboardAvoidingView behavior="position">
                    <BlockDetail>
                        <TouchableOpacity style={styles.buttonStyle}>
                            <Image
                                style={styles.introImageStyle}
                                source={require('./IdentityImages/SimpleAdd.svg')}
                            />
                        </TouchableOpacity>
                    </BlockDetail>
                </KeyboardAvoidingView>
                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={keyboardVerticalOffset}>
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
                        <Input
                            placeholder={'Username'}
                            inputText={'Username'} />
                        <Input
                            placeholder={'Fullname'}
                            inputText={'Fullname'} />
                        <Text style={styles.errorTextStyle}>
                            {this.state.error}
                        </Text>
                    </BlockDetail>
                </KeyboardAvoidingView>
                <KeyboardAvoidingView behavior="position">
                    {this.renderButton()}
                </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#F1F1F2',
    },
    buttonStyle: {
        borderColor: '#ddd',
        borderBottomWidth: 0,
        backgroundColor: '#F1F1F2',
        height: 160,

    },
    introImageStyle: {
        flex: 1,
        alignSelf: 'center',
        width: 80,
        height: undefined,
        backgroundColor: '#F1F1F2'
    },
    errorTextStyle: {
        color: 'red',
        alignSelf: 'center',
        fontSize: 20,
    }

});