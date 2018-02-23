import React, {Component} from 'react';
import {
    FlatList,
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    ActivityIndicator
  } from 'react-native';

import firebase from '../../firebase/firebase';


export default class Profile extends Component {
    static route = {
        navigationBar: {
          title: 'Profile',
          backgroundColor: '#33cccc',
        }
      }

      signOutUser = async () => {
        try {
            await firebase.auth().signOut();
        } catch (e) {
            console.log(e);
        }
    }
    
    render() { 
        return (
            <Text onPress={() => this.signOutUser()} >PROFILE</Text>
        ); 
    };
};

