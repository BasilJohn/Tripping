import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Footer } from '../common';

export default class SignUp extends React.Component {

    static navigationOptions = {
        title: 'Main Feed',
        headerTintColor: 'black',
        headerTitleStyle: { color: 'black' }
    };

    render(props) {
        return (
            <View>
                <Footer />
            </View>
        );
    }
}

