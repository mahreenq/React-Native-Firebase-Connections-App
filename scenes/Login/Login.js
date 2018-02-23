import React, { Component } from 'react';
import { View, Text, Button, } from 'react-native';
import firebase from 'firebase';
import TextFieldInput from '../../components/TextFieldInput';
import styles from './styles.js';



class SignInForm extends Component {
    state = {   email: '', 
                password: '', 
                error: '', 
                loading: false 
            };

    onSignInPress() {
        this.setState({ error: '', loading: true });
        const { email, password } = this.state;
                firebase.auth().signInWithEmailAndPassword(email, password)
                    .then(() => { this.setState({ error: '', loading: false }); })
                    .catch(() => {
                        firebase.auth().createUserWithEmailAndPassword(email, password)
                            .then(() => { this.setState({ error: '', loading: false }); })
                            .catch(() => {
                                this.setState({ error: 'Authentication failed.', loading: false });
                    });
            });
    }
    renderButtonOrLoading() {
        if (this.state.loading) {
            return <View><Text> LOADING... </Text></View>
        }
        return <Button onPress={this.onSignInPress.bind(this)} title="Log in" />;
    }
    render() {
        return (
            <View style={styles.logInContainer}>

                    <Text style={{fontSize:35, color:'#2eb8b8', paddingBottom:30,}}> CONNECTIONS </Text>

                    <TextFieldInput
                        label='Email Address'
                        placeholder='youremailaddress'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        autoCorrect={false}
                    />
                    <TextFieldInput
                        label='Password'
                        autoCorrect={false}
                        placeholder='Your Password'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                    <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                    {this.renderButtonOrLoading()}
            </View>
        );
    }
}
export default SignInForm;