import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from'../styles.js';

const TextFieldInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
const { loginInputStyle, labelStyle, loginContainer } = styles;
return (
        <View style={loginContainer}>
            <Text style={{fontSize:22, color:'white', marginLeft:20}}>{label}</Text>
            <TextInput
                autoCorrect={false}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                style={loginInputStyle}
                underlineColorAndroid={'transparent'}
                autoCorrect={false}
            />
        </View>
    );
};

export default TextFieldInput;