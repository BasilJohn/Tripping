import React  from 'react';
import { Text,StyleSheet, Image, ScrollView }  from 'react-native';
import Button from './common/Button';
import Intro from './opening/Intro';
import IntroBlock from './opening/IntroBlock';

export default class Opening extends React.Component{
    render(props) {
        return(
            <ScrollView>
            <Intro>
            <IntroBlock>
            <Image style={styles.introImageStyle} source={require('../images/IntroImage.jpg')} />
            </IntroBlock>    
            <IntroBlock>
            <Text >Hey,{"\n"}
            {"\n"}
            Welcome to Tripping,here you can add all details regarding your trip.Listing a few things that you can do using Tripping. {"\n"}
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
            <Button />
            </IntroBlock>
            </Intro>
            </ScrollView>
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

