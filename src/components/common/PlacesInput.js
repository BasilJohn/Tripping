import React from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { GooglePlacesInput } from './GooglePlacesInput';

const IMAGES = {
    start: require('./Images/GooglePlaces.png'),
    end: require('./Images/redtarget.png')
}

export default class PlacesInput extends React.Component {
    render(props) {
        return (
            <View style={styles.containerStyle}>
                {/* <Image style={styles.imageStyle} source={IMAGES[this.props.imagesrc]} /> */}
                <GooglePlacesInput placeholder={this.props.placeholder}/>
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
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        paddingTop: 80,
        flex: 2,
        borderBottomWidth: 1,
        borderColor: '#000'
    },
    imageStyle: {
        height: 100,
        flex: 1,
        width: 50,
        alignSelf: 'center',
        backgroundColor: '#F1F1F2'
    }

});



export { PlacesInput };