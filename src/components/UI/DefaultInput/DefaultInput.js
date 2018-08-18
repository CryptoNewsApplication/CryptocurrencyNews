import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const DefaultInput = props => (
    <TextInput  
        underlineColorAndroid="transparent"
        {...props}  //with this, all the extra parameters set in the textInput are accepted (Like the placeholder for example)
        style={[styles.input, props.style, !props.valid && props.touched ? styles.invalid : null]}
        onChangeText={props.onChangeText}
    />  
);

const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 10,
        padding: 5,
        marginTop: 8,
        marginBottom: 8
    },
    invalid: {
        backgroundColor: '#f9c0c0',
        borderColor: "red"
    }
});

export default DefaultInput;