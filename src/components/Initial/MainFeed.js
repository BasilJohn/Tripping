import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Footer, Button } from '../common';

export default class SignUp extends React.Component {
    state = { screenToShow: '' };
    static navigationOptions = {
        title: 'Main Feed',
        headerTintColor: '#F1F1F2',
        headerTitleStyle: { color: '#F1F1F2' }

    };

    updateScreenToShow = (text) => {

        this.setState({
            screenToShow: ''
        });
        this.setState({
            screenToShow: text
        });

    }
    renderChildView() {
        switch (this.state.screenToShow) {
            case 'You':
                return (<Text>{'You'}</Text>);
            case 'NearYou':
                return (<Text>{'NearYou'}</Text>);
            case 'World':
                return (<Text>{'World'}</Text>);
            default:
                return (<Text>{'You'}</Text>);
        }
    }

    render(props) {

        return (
            <View style={styles.containerStyle}>
                <View style={styles.contentStyle}>
                    {this.renderChildView()}
                </View>
                <View>
                    <Footer updateScreenToShow={this.updateScreenToShow} />
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
