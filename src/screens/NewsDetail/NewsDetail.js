import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Image, Text, Button, StyleSheet,TouchableOpacity, WebView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { deletePlace } from '../../store/actions/index';

class NewsDetail extends Component {

    constructor(props){
        super(props);

        this.props.navigator.setStyle({
            navBarTextColor: 'white',
            navBarButtonColor: 'white',
            navBarBackgroundColor: 'black'
        });
    }

    placeDeletedHandler = () => {
        this.props.onDeletePlace(this.props.selectedNews.key);
        this.props.navigator.pop();
    }

    render () {

        

        return (
            <View style={styles.container}>
                <View style={styles.newsInfo}>
                    <Text style={styles.upperText}>{this.props.selectedNews.title}</Text>
                    <Text style={styles.subText}>{this.props.selectedNews.source.url}</Text>
                </View>
                
                <WebView
                    source={{uri: this.props.selectedNews.url}}
                    style={{marginTop: 5}}
                    //injectedJavaScript={cleanNewsHtml(this.props.selectedNews.type)}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                />
                
            </View>
        );
    }

};

const styles = StyleSheet.create({
    container: {
        margin: 0,
        flex: 1
    },
    newsInfo: {
        backgroundColor: "black"
    },
    upperText: {
        fontFamily: 'openSans',
        fontSize: 20,
        color: 'white',
        marginTop: 10,
        marginLeft: 10
    },
    subText:{ 
        fontFamily: 'openSans',
        fontSize: 13,
        color: 'white',
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10
    },
    webview: {
        flex: 1
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key))
    };
};

export default connect(null,mapDispatchToProps)(NewsDetail);