'use strict';
import React, {StyleSheet, Dimensions,} from 'react-native';
let {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({

errorTextStyle: {
    color: '#E64A19',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10
    },
    logInContainer:{
      backgroundColor: '#d6f5f5',
      height: height,
      flex: 1,
      flexDirection:'column',
      alignItems:'center',
      justifyContent: 'center',
    },
    gradient:{
      height: height,
      width:width,
      flex: 1,
      flexDirection:'column',
      alignItems:'center',
      justifyContent: 'center',

    }
});
export default styles;