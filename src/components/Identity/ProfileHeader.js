import React from 'react';
import { View,StyleSheet } from 'react-native';

const ProfileHeader = (props) =>{
    return(
        <View style={styles.containerStyle}>
          {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    
     containerStyle: {
    
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        position: 'relative',

     }
   
   });

export default ProfileHeader;