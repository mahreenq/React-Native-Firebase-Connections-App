import React, {Component} from 'react';
import {FlatList, Platform, StyleSheet, Text, TextInput, View,Button, Image, ScrollView, ActivityIndicator, AppRegistry, ListView, TouchableHighlight, AlertIOS, Modal } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
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
          title:'',
          desc:'',
          date:'',
          time:'',
          location:'',
          rsvp:'',
          modalVisible: false,
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
          var events = [];
          snap.forEach((child) => {
            events.push({
              title: child.val().title,
              desc: child.val().desc,
              date: child.val().date,
              time: child.val().time,
              location: child.val().location,
              rsvp: child.val().rsvp,
              _key: child.key
            });
          });
    
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(events)
          });
    
        });
      }
    
      componentDidMount() {
        this.listenForItems(this.itemsRef);
      }

      openModal() {
        this.setState({modalVisible:true});
      }
    
      closeModal() {
        this.setState({modalVisible:false});
      }
      _goToForm = () => {
        this.props.navigator.push(Router.getRoute('eventForm'));
      }

     handleSubmit = () => {
        // event.preventDefault();
        this.itemsRef.push({title: this.state.title , desc:this.state.desc, date:this.state.date, time:this.state.time, location:this.state.location, rsvp: false});
        this.setState({modalVisible:false});
      }
     

      
    
      render() {
        return (
          <View style={styles.container}>

    
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this._renderItem.bind(this)}
              enableEmptySections={true}
              style={styles.listview}/>

              <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}>

            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
              <View >
                <Text style={{color: '#ffffff', fontSize:30, textAlign:'center',}}> Create an Event! </Text>
                <TextInput
                    style={{ height: 30, width:300, margin:10, padding:5, borderWidth: 1, 
                        borderColor: "rgba(0,0,0,0.5)"}}
                    placeholder={'Title'}
                    placeholderTextColor={"#ffffff"}
                    name="title"
                    ref="title"
                    onChangeText={text => {
                      this.setState({ title: text });
                    }}
              
                    />
                    <TextInput
                    style={{ height: 150, width:300, margin:10,padding:5,  borderWidth: 1, 
                        borderColor: "rgba(0,0,0,0.5)"}}
                    placeholder={'Description'}
                    multiline={true}
                    placeholderTextColor={"#ffffff"}
                    name="desc"
                    ref="desc"
                    onChangeText={text => {
                      this.setState({ desc: text });
                    }}
                    />
                    <TextInput
                    style={{ height: 30, width:300, margin:10,padding:5,  borderWidth: 1, 
                        borderColor: "rgba(0,0,0,0.5)"}}
                    placeholder={'Date (ex. March 3rd)'}
                    placeholderTextColor={"#ffffff"}
                    name="date"
                    ref="date"
                    onChangeText={text => {
                      this.setState({ date: text });
                    }}
                    />
                    <TextInput
                    style={{ height: 30, width:300,margin:10,padding:5,  borderWidth: 1, 
                        borderColor: "rgba(0,0,0,0.5)"}}
                    placeholder={'Time (ex. 5:00pm)'}
                    placeholderTextColor={"#ffffff"}
                    name="time"
                    ref="time"
                    onChangeText={text => {
                      this.setState({ time: text });
                    }}
                    />
                    <TextInput
                    style={{ height: 30, width:300,margin:10,padding:5,  borderWidth: 1, 
                        borderColor: "rgba(0,0,0,0.5)"}}
                    placeholder={'Location'}
                    placeholderTextColor={"#ffffff"}
                    name="location"
                    ref="location"
                    onChangeText={text => {
                      this.setState({ location: text });
                    }}
                    />
            
            </View>

              <Button onPress={() => this.closeModal()} title="Cancel"></Button>
              <Button onPress={this.handleSubmit.bind(this)} title="Submit"> </Button>

              </View>
            </View>
          </Modal>
    
            <ActionButton  onPress={() => this.openModal()} title="Invite your connections to an event!" />
    
          </View>
        )
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

      const onLike = () => {
        this.itemsRef.child(item._key).update({ 
          rsvp: !item.rsvp
        });
     };

    
        return (
          <EventItem item={item} onPress={onPress} onLike={onLike} />
        );
      }
};

