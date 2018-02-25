import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createRouter, NavigationProvider, StackNavigation, } from '@expo/ex-navigation';
import styles from './styles.js';
import NavigationLayout from './navigation/NavigationLayout.js';
import Router from './navigation/router.js';
import firebaseapp from './firebase/firebase.js';
import * as firebase from 'firebase';
import Login from './scenes/Login/Login.js';

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
currentUser=firebase.auth().currentUser;

    // The application is initialising
    if (this.state.loading) return <Text style={{fontSize:40, color:'#2eb8b8', paddingBottom:30, paddingTop:250, textAlign:'center'}}> LOADING... </Text>;
    // The user is an Object, so they're logged in
    if (this.state.user) return(
      <NavigationProvider router ={Router} currentUser={currentUser}  >
            <StackNavigation  
            id="root"
            navigatorUID="root" 
            initialRoute={Router.getRoute('layout')}
            currentUser={currentUser} />
        </NavigationProvider>
    ) ;
    // The user is null, so they're logged out
    return <Login />;


    }
};

