import React from 'react';
import { View, StyleSheet } from 'react-native';

const line = props =>{
    return (
        <View style={styles.line}>
        </View>
    );
};

const styles = StyleSheet.create({
    line:{
        width: "100%",
        height: 1,
        borderWidth: 1,
        borderColor: "black"
    }
});
export default line;