import React, { Component } from 'react';
import {  AppRegistry,  ListView, StyleSheet,  Text, View,TouchableHighlight, AlertIOS, Platform} from 'react-native';
//import * as firebase from 'firebase';
//import StatusBar from './components/StatusBar';
//import ActionButton from './components/ActionButton';
//import ListItem from './components/ListItem';
import { createRouter, NavigationProvider, StackNavigation, } from '@expo/ex-navigation';
import styles from './styles.js';
import NavigationLayout from './navigation/NavigationLayout.js';
import Router from './navigation/router.js';
import firebaseapp from './firebase/firebase.js';
import * as firebase from 'firebase';
import Login from './scenes/Login/Login.js';

// const firebaseConfig = {
//   apiKey: "AIzaSyAi5M3MW-nPAEx0NYuHNKg45GwE3G6qR8k",
//   authDomain: "connections-1887f.firebaseapp.com",
//   databaseURL: "https://connections-1887f.firebaseio.com",
//   storageBucket: "connections-1887f.appspot.com" 
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig)

export default class App extends Component {

constructor() {
  super();
  this.state = {
    loading: true,
  };
}

componentWillMount() {
  firebaseApp
}

componentDidMount() {
  this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
    this.setState({
      loading: false,
      user,
    });
  });
}

componentWillUnmount() {
  this.authSubscription();
}



render() {

    // The application is initialising
    if (this.state.loading) return <Text> LOADING... </Text>;
    // The user is an Object, so they're logged in
    if (this.state.user) return(
      <NavigationProvider router ={Router}  >
            <StackNavigation  
            id="root"
            navigatorUID="root" 
            initialRoute={Router.getRoute('layout')} />
        </NavigationProvider>
    ) ;
    // The user is null, so they're logged out
    return <Login />;


    }
};



// return (
//   <NavigationProvider router ={Router}  >
//       <StackNavigation  
//       id="root"
//       navigatorUID="root" 
//       initialRoute={Router.getRoute('layout')} />
//   </NavigationProvider>
// );