'use strict';
import React, { StyleSheet, Dimensions,} from 'react-native';

let {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({

    profileContainer:{
      backgroundColor: '#d6f5f5',
      height: height,
      width:width,
      flex: 1,
      justifyContent: 'space-around',
    },
    innerProfileContainer:{
      flexDirection:'column',
      alignItems:'center',
      justifyContent: 'space-around',
    },
    roundedProfileImage: {
        width:300, 
        height:300, 
        borderWidth:3,
        borderColor:'white', 
        borderRadius:150
      },
    profileText:{
        fontSize:20,
        padding:10,
        color:'#33cccc',
    },
    subProfileText:{
    color:'#29a3a3',
    }
});
export default styles;