import React from 'react';
import { View } from 'react-native';

const ProfileDetail = (props) =>{
  return(
      <View>
        {props.children}
      </View>
  );
};

export default ProfileDetail;

