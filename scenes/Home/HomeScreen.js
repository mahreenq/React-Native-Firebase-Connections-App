import React, {Component} from 'react';
import {FlatList, Platform, StyleSheet, Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import { createRouter, NavigationProvider, StackNavigation, } from '@expo/ex-navigation';
import ProfileScreen from '../Profile/ProfileScreen';


  
export default class HomeScreen extends Component {
    static route = {
        navigationBar: {
          title: 'Home',
        }
      }
    render() {
      const { navigate } = this.props.navigation;
      return (
          <View>
            <Text> HOME </Text>
            <Text onPress={this._goToAbout}> GO TO PROFILE SCREEN </Text>
          </View>
      );
    }
    _goToAbout = () => {
      this.props.navigator.push('profile');
    }

    
  }

  

