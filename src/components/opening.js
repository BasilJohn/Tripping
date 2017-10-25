import React  from 'react';
import { Text,StyleSheet, Image, ScrollView }  from 'react-native';
import Button from './common/Button';
import Intro from './common/Block';
import IntroBlock from  './common/BlockDetail';
import { StackNavigator } from 'react-navigation';
import InitialScreen from './Identity/Initial';
import SignUpScreen from './Identity/SignUp';
import LoginScreen from './Identity/Login';

  class Opening extends React.Component{

    static navigationOptions = {
        title: 'Welcome',

      };

    render(props) {

        const { navigate } = this.props.navigation;

        return(
            <ScrollView>
            <Intro>
            <IntroBlock>
            <Image style={styles.introImageStyle} source={require('../images/IntroImage.jpg')} />
            </IntroBlock>    
            <IntroBlock>
            <Text >Hey,{"\n"}
            {"\n"}
            Welcome to Tripping,here's what you can do using Tripping.{"\n"}
            {"\n"}
            1)Create your own Trip Group,add friends participating in the Trip and share all information.{"\n"}
            {"\n"}
            2)Track expense from all members of your Trip and be on track with finances.{"\n"}
            {"\n"}
            3)You can locate all members of your Trip group individually using our Tracker.{"\n"}
            {"\n"}
            4)Discover other groups Tripping.
            </Text>
            </IntroBlock>
            <IntroBlock>
            <Button onPress={ () => this.props.navigation.navigate('Initial') } buttonText={'Get Started'} />
            </IntroBlock>
            </Intro>
            </ScrollView>
        );  
    }
}

const Stacks = StackNavigator({
    Opening: {
      screen: Opening
    },
    Initial:{
      screen: InitialScreen
    },
    SignUp :{
      screen : SignUpScreen
    },
    Login :{
      screen : LoginScreen
    }
});


export default class App extends React.Component {
    render() {
      return (
        <Stacks />
      );
    }
  }


const styles = StyleSheet.create({
    
     introImageStyle: {
        height: 160,
        flex: 1,
        width: null

     }
   
   });

