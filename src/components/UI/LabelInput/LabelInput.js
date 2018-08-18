import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import DatePicker from '../Picker/DatePicker'

const labelInput = props => (

    <View style={styles.component}>
        <View style={styles.textPosition}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
        <View style={styles.inputPosition}>
            <DatePicker 
                {...props}
                style={styles.input}
                onDateChange={props.onDateChange}
                date={props.date}
                format={props.format}
                mode={props.mode}
            />
        </View>
    </View>
);

const styles = StyleSheet.create({
    component: { 
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        //justifyContent: 'center'
    },
    textPosition: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    text: {
        padding: 5,
        fontSize: 17
    },
    inputPosition: {
        flex: 1,
        alignItems: 'flex-end'
    },
    input: {
        width: "80%",
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 10,
        padding: 5
    },
    invalid: {
        backgroundColor: '#f9c0c0',
        borderColor: "red"
    }
});

export default labelInput;