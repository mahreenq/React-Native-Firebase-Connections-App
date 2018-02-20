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


export default class EventsScreen extends Component {
    static route = {
        navigationBar: {
          title: 'Profile',
          backgroundColor: 'red',
        }
      }
    
    render() { 
        return (
            <Text>Events</Text>
        );
    };
};

