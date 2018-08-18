import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';

import imageShare from '../../assets/share.png'

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <View style={styles.upperView}>
                <Text style={styles.upperText}>{props.newsName}</Text>
                <Text style={styles.subText}>{props.newsDate}</Text>
            </View>
            <View style={styles.subView}>
                <TouchableOpacity style={styles.imageView} onPress={() => alert("share on social")}>
                    <Image source={imageShare} style={styles.previewImage}/>
                </TouchableOpacity>
            </View>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "95%",
        padding: 10,
        ...Platform.select({
            ios: {
                backgroundColor: "#eee",
            },
            android: {
              backgroundColor: 'white',
            },
          }),
        
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        flexDirection: "column",
        //Shadow
        shadowOffset: { width: 5, height: 5 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 3
    },
    upperView: {
        flex: 1,
        alignItems: "flex-start",
        marginRight: 25
    },
    upperText: {
        fontFamily: 'openSans',
        fontSize: 20
    },
    subText:{ 
        fontFamily: 'openSans',
        fontSize: 10
    },
    subView:{ 
        flex: 1,
        alignItems: "flex-end"
    },
    imageView: {
        width: 50,
        height: 40
    },
    imageShare: {
        width: 10,
        height: 10
    }
});

export default listItem;