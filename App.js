import React, { Component } from 'react';
//import {  AppRegistry,  ListView, StyleSheet,  Text, View,TouchableHighlight, AlertIOS, Platform} from 'react-native';
//import * as firebase from 'firebase';
//import StatusBar from './components/StatusBar';
//import ActionButton from './components/ActionButton';
//import ListItem from './components/ListItem';
import { createRouter, NavigationProvider, StackNavigation, } from '@expo/ex-navigation';
import styles from './styles.js';
import NavigationLayout from './navigation/NavigationLayout.js';
import Router from './navigation/router.js';

//import * as firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: "AIzaSyAi5M3MW-nPAEx0NYuHNKg45GwE3G6qR8k",
//   authDomain: "connections-1887f.firebaseapp.com",
//   databaseURL: "https://connections-1887f.firebaseio.com",
//   storageBucket: "connections-1887f.appspot.com" 
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig)

export default class App extends Component {
render() {
  return (
        <NavigationProvider  router ={Router}  >
            <StackNavigation  
            id="root"
            navigatorUID="root" 
            initialRoute={Router.getRoute('layout')} />
        </NavigationProvider>
      );
    }
};






// //Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyAi5M3MW-nPAEx0NYuHNKg45GwE3G6qR8k",
//   authDomain: "connections-1887f.firebaseapp.com",
//   databaseURL: "https://connections-1887f.firebaseio.com",
//   storageBucket: "connections-1887f.appspot.com" 
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig)


// export default class HomeScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dataSource: new ListView.DataSource({
//         rowHasChanged: (row1, row2) => row1 !== row2,
//       })
//     };
//     this.itemsRef = this.getRef().child('itedsd');
//   }

//   getRef() {
//     return firebaseApp.database().ref();
//   }

//   listenForItems(itemsRef) {
//     itemsRef.on('value', (snap) => {

//       // get children as an array
//       var items = [];
//       snap.forEach((child) => {
//         items.push({
//           title: child.val().title,
//           desc: child.val().desc,
//           _key: child.key
//         });
//       });

//       this.setState({
//         dataSource: this.state.dataSource.cloneWithRows(items)
//       });

//     });
//   }

//   componentDidMount() {
//     this.listenForItems(this.itemsRef);
//   }

//   render() {
//     return (
//       <View style={styles.container}>

//         <StatusBar title="Grocery List" />

//         <ListView
//           dataSource={this.state.dataSource}
//           renderRow={this._renderItem.bind(this)}
//           enableEmptySections={true}
//           style={styles.listview}/>

//         <ActionButton onPress={this._addItem.bind(this)} title="Add" />

//       </View>
//     )
//   }

//   _addItem() {
//     AlertIOS.prompt(
//       'Add New Item',
//       null,
//       [
//         {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
//         {text: 'LALA',  style: 'cancel'},
//         {
//           text: 'Add',
//           onPress: (text, desc) => {
//             this.itemsRef.push({ title: text })
//             //this.itemsRef.push({ desc: text })
//           }
//         },
//       ],
//       'plain-text'
//     );
//   }

//   _renderItem(item) {

//     const onPress = () => {
//       AlertIOS.alert(
//         'Complete',
//         null,
//         [
//           {text: 'Complete', onPress: (text) => this.itemsRef.child(item._key).remove()},
//           {text: 'Cancel', onPress: (text) => console.log('Cancelled')}
//         ]
//       );
//     };

//     return (
//       <ListItem item={item} onPress={onPress} />
//     );
//   }

// }

