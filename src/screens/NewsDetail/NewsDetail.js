import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Image, Text, Button, StyleSheet,TouchableOpacity, WebView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { deletePlace } from '../../store/actions/index';
import cleanNewsHtml from '../../utility/cleanNewsHtml';

class NewsDetail extends Component {

    constructor(props){
        super(props);

        this.props.navigator.setStyle({
            navBarTextColor: 'white',
            navBarButtonColor: 'white',
            navBarBackgroundColor: '#1CA2DC'
        });
    }

    placeDeletedHandler = () => {
        this.props.onDeletePlace(this.props.selectedNews.key);

        /* POP deletes the current page from the stack and it goes back.
        there is also POPTOROOT in documentation, we need it if we want to go back to the root page! */
        
        this.props.navigator.pop();
    }

    render () {

        

        return (
            <View style={styles.container}>
                <View style={styles.newsInfo}>
                    <Text style={styles.upperText}>{this.props.selectedNews.name}</Text>
                    <Text style={styles.subText}>{this.props.selectedNews.pubdate}</Text>
                </View>
                
                <WebView
                    source={{uri: this.props.selectedNews.link}}
                    style={{marginTop: 5}}
                    injectedJavaScript={cleanNewsHtml(this.props.selectedNews.type)}      
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
        backgroundColor: "#6639B7"
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