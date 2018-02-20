import React, {Component} from 'react';
import {FlatList, Platform, StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, AppRegistry, ListView, TouchableHighlight, AlertIOS } from 'react-native';

import firebaseApp from '../../firebase/firebase';
import styles from './styles';

import StatusBar from '../../components/StatusBar';
import ActionButton from '../../components/ActionButton';
import EventItem from '../../components/EventItem';

export default class EventsScreen extends Component {
    static route = {
        navigationBar: {
          title: 'Events',
          backgroundColor: 'red',
        }
      }
      constructor(props) {
        super(props);
        this.state = {
          dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          })
        };
        this.itemsRef = this.getRef().child('events');
      }
    
      getRef() {
        return firebaseApp.database().ref();
      }
    
      listenForItems(itemsRef) {
        itemsRef.on('value', (snap) => {
    
          // get children as an array
          var items = [];
          snap.forEach((child) => {
            items.push({
              title: child.val().title,
              desc: child.val().desc,
              _key: child.key
            });
          });
    
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(items)
          });
    
        });
      }
    
      componentDidMount() {
        this.listenForItems(this.itemsRef);
      }
    
      render() {
        return (
          <View style={styles.container}>
    
            {/* <StatusBar title="Grocery List" /> */}
    
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this._renderItem.bind(this)}
              enableEmptySections={true}
              style={styles.listview}/>
    
            <ActionButton onPress={this._addItem.bind(this)} title="Submit a Post" />
    
          </View>
        )
      }
    
      _addItem() {
        AlertIOS.prompt(
          'Add New Item',
          null,
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {
              text: 'Add',
              onPress: (text) => {
                this.itemsRef.push({ title: text })
                //this.itemsRef.push({ desc: text })
              }
            },
          ],
          'plain-text'
        );
      }
    
      _renderItem(item) {
    
        const onPress = () => {
          AlertIOS.alert(
            'Complete',
            null,
            [
            {text: 'Complete', onPress: (text) => this.itemsRef.child(item._key).remove()},
            {text: 'Cancel', onPress: (text) => console.log('Cancelled')}
            ]
          );
        };
    
        return (
          <EventItem item={item} onPress={onPress} />
        );
      }
};

