import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';
//import {StyleSheet, Text, View, Modal , Button, TextInput } from 'react-native';
import firebase from '../../firebase/firebase';
import {Gravatar, GravatarApi} from 'react-native-gravatar';
import ActionButton from '../../components/ActionButton';
//import TextFieldInput from '../../components/TextFieldInput';
import styles from './styles';

export default class Profile extends Component {
    static route = {
        navigationBar: {
          title: 'Profile',
          backgroundColor: '#33cccc',
          tintColor: 'white',
        }
      }

    //   constructor(props) {
    //     super(props);
    //     this.state = {
    //       bio:'',
    //       loading:'',
    //       modalVisible: false,

    //      };
    //      this.itemsRef = this.getRef().child('users');
    //    }
    
    //   getRef() {
    //     return firebaseApp.database().ref();
    //   }
    
    //   listenForItems(itemsRef) {
    //     itemsRef.on('value', (snap) => {
    
    //       // get children as an array
    //       var users = [];
    //       snap.forEach((child) => {
    //         users.push({
    //           bio: child.val().bio,
    //           _key: child.key
    //         });
    //       });
    
    //       this.setState({dataSource: this.state.dataSource});
    //     });
    //   }
    
    //   componentDidMount() {
    //     this.listenForItems(this.itemsRef);
    //   }

    //   openModal() {
    //     this.setState({modalVisible:true});
    //   }
    
    //   closeModal() {
    //     this.setState({modalVisible:false});
    //   }

    // handleSubmit = () => {


    // }


    signOutUser = async () => {
        try {
            await firebase.auth().signOut();
        } catch (error) {
            console.log(error);
        }
    }
    render() { 
        user = firebase.auth().currentUser;


        //ADD LOGIC SO DATA IS BEING PULLED FROM CUSTOM USER OBJECT RATHER THAN FIREBASE AUTH

        return (
            <View style={styles.profileContainer}>
            <View style={styles.innerProfileContainer}>
                <Gravatar options={{
                email: user.email,
                parameters: { "size": "200", "d": "mm" },
                secure: true
                }}
                style={styles.roundedProfileImage} />

             <Text style={styles.profileText}>Hi {user.displayName}! </Text> 
             <Text style={styles.profileText}> {user.email}</Text>
             <Text style = {styles.subProfileText}> To add or edit your image, log on to Gravatar! </Text>
             </View>

    {/* INSERT MODAL HERE */}

        
            <ActionButton onPress={() => this.signOutUser()}  title="Logout" />
            </View>
        ); 
    };
};






//  <Modal
// visible={this.state.modalVisible}
// animationType={'slide'}
// onRequestClose={() => this.closeModal()}>

// <Text style={{fontSize:25, color:'blue', padding:50,}}> EDIT  </Text>

//     <TextFieldInput
//     label='Bio'
//     autoCorrect={false}
//     placeholder='Add a short description'
//     value={this.state.bio}
//     onChangeText={bio => this.setState({ bio })}
//     />

//     <Button onPress={() => this.closeModal()} color="blue"  title="Cancel" />
//     <Button onPress={() => this.handleSubmit()} color="blue"  title="Submit" />
// </Modal> 



// IN RENDER
// authUser = firebase.auth().currentUser;
// ref = firebaseApp.database().ref('users/'+authUser.uid)
// ref.once('value', function(snapshot){
//     currentUser = snapshot.val();
// });