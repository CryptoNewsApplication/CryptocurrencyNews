import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-native-navigation';

import startDrawerManager from '../DrawerManager/DrawerManager'
class AuthScreen extends Component {

    loginHandler = () => {
        startDrawerManager();
    }

    render () {
        return (
            <View>
                <Text>Auth screen</Text>
                <Button title="Login" onPress={this.loginHandler} />
            </View>
        );
    }
}

export default AuthScreen;