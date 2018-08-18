import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, Dimensions, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { createStackNavigator } from 'react-native-navigation';
import { connect } from 'react-redux';
import { NavigationActions } from '../../utility/NavigationActions'


import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import MainText from '../../components/UI/MainText/Maintext'
import backgroundImage from '../../assets/bg_login.png'
import ButtonWithBackground from '../../components/UI/Button/ButtonWithBackground'

import validate from '../../utility/validation/'
import { authOne, authAutoSignIn } from '../../store/actions/index'

class AuthScreen extends Component {

    state = {
        viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
        controls: {
            authcode: {
                value: "",
                valid: false,
                validationRules: {
                    minLength: 7,
                    onlyDigits: ''
                },
                touched: false
            }
        }
    }

    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", this.updateStyles);
        NavigationActions.setNavigator(this.props.navigator)

    }

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.updateStyles);
    }

    componentDidMount() {
        this.props.onAuthSignIn();
    }
    
    updateStyles = (dims) => {
        this.setState({
            viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
        });
    }

    loginHandler = () => {
        const authData = {
            authcode: this.state.controls.authcode.value
        }
        this.props.onLogin(authData);        
    }

    updateInputState = (key, value) => {
        let connectedValue = {};
        
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    [key]: {
                        ...prevState.controls[key],
                        value: value,
                        valid: validate(value, prevState.controls[key].validationRules),
                        touched: true
                    }
                }
            }
        });
    }

    render () {
        let submitButton = (
            <ButtonWithBackground 
                        color="#6639B7" 
                        onPress={this.loginHandler}
                        disabled={!this.state.controls.authcode.valid}>LÄHETÄ PIN-KOODI</ButtonWithBackground>
        )
        if(this.props.isLoading){
            submitButton = <ActivityIndicator/>
        }
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <KeyboardAvoidingView style={styles.container} behavior="padding">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inputContainer}>

                        <View style={
                            this.state.viewMode === "portrait"
                            ? styles.portraitPasswordContainer
                            : styles.landscapePasswordContainer}>

                            <View style={
                                this.state.viewMode === "portrait"
                                ? styles.portraitPasswordWrapper
                                : styles.landscapePasswordWrapper}>

                                <DefaultInput 
                                    placeholder="Jäsennumero" 
                                    style={styles.input}
                                    value={this.state.controls.authcode.value}
                                    onChangeText={(val) => this.updateInputState('authcode', val)}
                                    valid={this.state.controls.authcode.valid}
                                    touched={this.state.controls.authcode.touched}
                                    //next is method of textInput components
                                    secureTextEntry/>
                            </View>
                        </View>

                    </View>
                    </TouchableWithoutFeedback>
                    {submitButton}
                </KeyboardAvoidingView>
            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        // Flex 1 gives the priority to the object to get full screen space.
        // If another element has felx 1, they will divide the screen.
        flex: 1,
        //Set the content in middle page (Vertical axes)
        justifyContent: "center",
        //Also horizontal axes is centered in middle with:
        alignItems: "center"
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "white",
        borderColor: "#bbb"
    },
    backgroundImage: {
        width: "100%",
        //Flex has been added in order to cover all the available space!
        flex: 1
    },
    landscapePasswordContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    portraitPasswordContainer: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    landscapePasswordWrapper: {
        width: "45%"
    },
    portraitPasswordWrapper: {
        width: "100%"
    }
});

const mapStateToProps = state => {
    return {
        isLoading: state.ui.isLoading
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onLogin: (authData) => dispatch(authOne(authData)),
        onAuthSignIn: () => dispatch(authAutoSignIn())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);