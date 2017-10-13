import React  from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity,Image,Alert } from 'react-native';

export default class Opening extends React.Component{
    render() {
        return(
            <View style={styles.container}>
            <View>
           
            <Image style={styles.headerImage} source={require('../images/Penguins.jpg')}></Image>
            <Text>Hey,{"\n"}</Text>
            <Text>Welcome to Tripping,here you can add all details regarding your trip.Listing a few things that you can do using Tripping.{"\n"}</Text>
            <Text>1)Create your own Trip Group,add friends participating in the Trip and share all information.{"\n"}</Text>
            <Text>2)Track expense from all members of your Trip and be on track with finances.{"\n"}</Text>
            <Text>3)You can locate all members of your Trip group individually using our Tracker.{"\n"}</Text>
            <Text>4)Discover other groups Tripping.{"\n"}</Text>
            <View style={styles.buttonContainer}>
            <Button  onPress={this._onPressButton}  title="Get Started" color="#841584"  accessibilityLabel="Learn more about this purple button"/>
            </View>
            </View>
            </View>
        );  
    }

    _onPressButton() {
        Alert.alert('You tapped the button!')
      }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth:1,
      borderColor: 'black',
      flexDirection:'column'
    },
    buttonContainer: {
        borderRadius: 5,
        borderWidth: 3,
        borderColor: 'black',
        alignSelf: 'center',
        width:150
        
       
    }, 
    headerImage: {
        width:300,
        alignSelf: 'center',
        height:200
    }
  });