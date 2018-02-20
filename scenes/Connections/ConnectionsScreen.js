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


export default class ConnectionsScreen extends Component {
    static route = {
        navigationBar: {
          title: 'Connections',
          backgroundColor: 'pink',
        }
      }
    
    render() { 
        return (
            <Text>Connections</Text>
        );
    };
};

