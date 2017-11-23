import React from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity, Modal, Text, TouchableHighlight } from 'react-native';
import { GooglePlacesInput } from './GooglePlacesInput';

const IMAGES = {
    start: require('./Images/GooglePlaces.png'),
    end: require('./Images/redtarget.png')
}

export default class PlacesInput extends React.Component {

    state = {
        modalVisible: false,
        selectedPlace : ''
    }
    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }
    setSelectedPlace = (placeSelected) => {
        this.setState({
            selectedPlace: placeSelected,
            modalVisible: false 
        });
    }

    render(props) {
        return (
            <View style={styles.containerStyle}>
                <Image style={styles.imageStyle} source={IMAGES[this.props.imagesrc]} />
                <TouchableOpacity style={styles.touchStyle}  onPress={() => { this.toggleModal(true) }}>
                    <TextInput
                        secureTextEntry={this.props.secureTextEntry}
                        autoCorrect={false}
                        placeholder={this.props.placeholder}
                        value={this.state.selectedPlace}
                        onChangeText={this.props.onChangeText}
                        pointerEvents="none"
                    />
                </TouchableOpacity>
                <Modal animationType={"slide"} transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { console.log('closed') }}>
                    <View style={styles.modal}>
                        <TouchableOpacity style={styles.closeStyle} onPress={() => { this.toggleModal(!this.state.modalVisible) }}>
                            <Text style={styles.textStyle} >Close</Text>
                        </TouchableOpacity>
                        
                        <GooglePlacesInput setSelectedPlace={this.setSelectedPlace } />
                    </View>
                </Modal>
            </View>
        );
    }
};

const styles = StyleSheet.create({

    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 1,
        justifyContent: 'space-between'
    },
    touchStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        paddingTop: 80,
        flex: 2,
        borderBottomWidth: 1,
        borderColor: '#000'
    },
    inputStyle: {

        fontSize: 18,
        lineHeight: 23

    },
    imageStyle: {
        height: 100,
        flex: 1,
        width: 50,
        alignSelf: 'center',
        backgroundColor: '#F1F1F2'
    },
    modal: {
        flex: 1,
        paddingTop: 25,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#2D4262'
    },
    closeStyle: {
        alignItems: 'flex-end',
        marginBottom: 15
    },
    textStyle: {
        color: '#F1F1F2',
        fontSize: 16,
        fontWeight:'bold'
    }

});



export { PlacesInput };