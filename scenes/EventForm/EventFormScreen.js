import React, {Component} from 'react';
import {
    FlatList,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    ScrollView,
    ActivityIndicator
  } from 'react-native';
  import ActionButton from '../../components/ActionButton';

export default class EventFormScreen extends Component {
    static route = {
        navigationBar: {
          title: 'Add an Event',
          backgroundColor: 'pink',
        }
      }
    
    render() { 
        return (
            <View style={{flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignContent:'center',}}>
                <TextInput
                    style={{ height: 30, width: '80%', margin:10, padding:5, borderWidth: 1, 
                        borderColor: "rgba(0,0,0,0.5)"}}
                    placeholder={'Title'}
                    placeholderTextColor={"rgba(198,198,204,1)"}
                    // onChangeText={(text) => {this.setState({text})}}
                    // onSubmitEditing={() => {this.setState({text: ''})}}
                    // value={(this.state && this.state.text) || ''}
                    />
                    <TextInput
                    style={{ height: 150, width: '80%', margin:10,padding:5,  borderWidth: 1, 
                        borderColor: "rgba(0,0,0,0.5)"}}
                    placeholder={'Description'}
                    placeholderTextColor={"rgba(198,198,204,1)"}
                    // onChangeText={(text) => {this.setState({text})}}
                    // onSubmitEditing={() => {this.setState({text: ''})}}
                    // value={(this.state && this.state.text) || ''}
                    />
                    <TextInput
                    style={{ height: 30, width: '80%', margin:10,padding:5,  borderWidth: 1, 
                        borderColor: "rgba(0,0,0,0.5)"}}
                    placeholder={'Date'}
                    placeholderTextColor={"rgba(198,198,204,1)"}
                    // onChangeText={(text) => {this.setState({text})}}
                    // onSubmitEditing={() => {this.setState({text: ''})}}
                    // value={(this.state && this.state.text) || ''}
                    />
                    <TextInput
                    style={{ height: 30, width: '80%',margin:10,padding:5,  borderWidth: 1, 
                        borderColor: "rgba(0,0,0,0.5)"}}
                    placeholder={'Time'}
                    placeholderTextColor={"rgba(198,198,204,1)"}
                    // onChangeText={(text) => {this.setState({text})}}
                    // onSubmitEditing={() => {this.setState({text: ''})}}
                    // value={(this.state && this.state.text) || ''}
                    />
                    <TextInput
                    style={{ height: 30, width: '80%',margin:10,padding:5,  borderWidth: 1, 
                        borderColor: "rgba(0,0,0,0.5)"}}
                    placeholder={'Location'}
                    placeholderTextColor={"rgba(198,198,204,1)"}
                    // onChangeText={(text) => {this.setState({text})}}
                    // onSubmitEditing={() => {this.setState({text: ''})}}
                    // value={(this.state && this.state.text) || ''}
                    />

                    <ActionButton title="Submit!"/>
            
            </View>
        );
    };
};

