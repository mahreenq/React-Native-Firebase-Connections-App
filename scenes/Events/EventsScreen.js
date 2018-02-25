import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View,Button, ListView, AlertIOS, Modal } from 'react-native';
import {StackNavigator,} from 'react-navigation';
import firebaseApp from '../../firebase/firebase';
import styles from './styles';
import ActionButton from '../../components/ActionButton';
import EventItem from '../../components/EventItem';


export default class EventsScreen extends Component {
    static route = {
        navigationBar: {
          title: 'Events',
          backgroundColor: '#33cccc',
          tintColor: 'white',
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
          invitedby:'',
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
              invitedby: child.val().invitedby,
              rsvpby: child.val().rsvpby,
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

     handleSubmit = () => {
        // event.preventDefault();
            this.itemsRef.push({title: this.state.title , desc:this.state.desc, date:this.state.date, time:this.state.time, location:this.state.location, invitedby:firebaseApp.auth().currentUser.displayName,  rsvp: false});
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
                    <View>
                      <Text style={{color: '#ffffff', fontSize:30, textAlign:'center',}}> Create an Event! </Text>
                          <TextInput
                          style={styles.regInput}
                          placeholder={'Title'}
                          placeholderTextColor={"#196666"}
                          name="title"
                          ref="title"
                          onChangeText={text => {
                            this.setState({ title: text });
                          }}
                  
                          />
                          <TextInput
                          style={styles.multiInput}
                          placeholder={'Description'}
                          multiline={true}
                          placeholderTextColor={"#196666"}
                          name="desc"
                          ref="desc"
                          onChangeText={text => {
                            this.setState({ desc: text });
                          }}
                          />
                          <TextInput
                          style={styles.regInput}
                          placeholder={'Date (ex. March 3rd)'}
                          placeholderTextColor={"#196666"}
                          name="date"
                          ref="date"
                          onChangeText={text => {
                            this.setState({ date: text });
                          }}
                          />
                          <TextInput
                          style={styles.regInput}
                          placeholder={'Time (ex. 5:00pm)'}
                          placeholderTextColor={"#196666"}
                          name="time"
                          ref="time"
                          onChangeText={text => {
                            this.setState({ time: text });
                          }}
                          />
                          <TextInput
                          style={styles.regInput}
                          placeholder={'Location'}
                          placeholderTextColor={"#196666"}
                          name="location"
                          ref="location"
                          onChangeText={text => {
                            this.setState({ location: text });
                          }}
                          />
                    </View>
                <View style={{flex:1, flexDirection:'row',}}>
                  <Button onPress={() => this.closeModal()} color="white"  title="Cancel" />
                  <Button onPress={this.handleSubmit.bind(this)} color="white"  title="Submit" />
                </View>
            </View>
          </View>
        </Modal>
    
            <ActionButton onPress={() => this.openModal()} title="Invite your connections to an event!" />
    
          </View>
        )
      }

      _renderItem(item) {
        const onPress = () => {
          AlertIOS.alert(
            'Remove?',
            null,
            [
            {text: 'Remove', onPress: (text) => this.itemsRef.child(item._key).remove()},
            {text: 'Cancel', onPress: (text) => console.log('Cancelled')}
            ]
          );
      };
      const onRsvp = () => {
        this.getRef().child('events').child(item._key).child('rsvpby').push({ 
          rsvpby: firebaseApp.auth().currentUser.email
        })
      };
    
      const onUnRsvp = () => {
        let ref = firebaseApp.database().ref('events').child(item._key).child('rsvpby');
          ref.orderByChild('rsvpby').equalTo(currentUser.email).once('value', snapshot => {
            let updates = {};
            snapshot.forEach(child => updates[child.key] = null);
            ref.update(updates);
        });
      };
    
        return (
          <EventItem event={item} onPress={onPress} onRsvp={onRsvp} onUnRsvp={onUnRsvp} />
        );
      }
};

