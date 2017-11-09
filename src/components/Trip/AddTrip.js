import React from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, StyleSheet, Platform } from 'react-native';
import { Input, Button, BlockDetail } from '../common';
const keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0
export default class AddTrip extends React.Component {

    static navigationOptions = {
        title: 'Add Trip',
        headerTintColor: '#F1F1F2',
        headerTitleStyle: { color: '#F1F1F2' }

    };

    render(props) {
        return (
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={keyboardVerticalOffset}>
                    <BlockDetail>
                        <Input
                            inputText={'From'}
                            placeholder={'Trip start place'}
                        />
                    </BlockDetail>
                    <BlockDetail>
                        <Input
                            inputText={'In'}
                            placeholder={'Select Country'}
                        />
                    </BlockDetail>
                    <BlockDetail>
                        <Input
                            inputText={'To'}
                            placeholder={'Trip end place'}
                        />
                    </BlockDetail>
                    <BlockDetail>
                        <Input
                            inputText={'In'}
                            placeholder={'Select Country'}
                        />
                    </BlockDetail>
                    <BlockDetail>
                        <Input
                            inputText={'Trip Name'}
                            placeholder={'Your trip name'}
                        />
                    </BlockDetail>
                </KeyboardAvoidingView>
                <KeyboardAvoidingView behavior="position">
                    <Button buttonText={'Create Trip'} />
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
    labelStyle: {
        fontSize: 18,
        flex: 1,
        textAlign: 'center'
    },
});