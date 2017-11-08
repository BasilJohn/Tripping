import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Footer, Button } from '../common';

export default class SignUp extends React.Component {

    static navigationOptions = {
        title: 'Main Feed',
        headerRight:<Text>{'Near You'}</Text>,
        headerTintColor: '#F1F1F2',
        headerTitleStyle: { color: '#F1F1F2' }
    
    };

    render(props) {

        return (
            <View style={styles.containerStyle}>
                <View style={styles.contentStyle}>
                    <Text>Main</Text>
                </View>
                <View>
                    <Footer />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#F1F1F2'

    },
    contentStyle: {
        flex: 1
    }

});
