import React, {Component} from 'react';
import { StyleSheet, View, Button, Image} from 'react-native';


import { auth0, AUTH0_DOMAIN } from '../../lib/auth0';

import startDrawerManager from '../DrawerManager/DrawerManager'

import imageLogo from '../../assets/CCNLogo.png'



class AuthScreen extends Component {

loginWindow() {
    auth0
      .webAuth
      .authorize({scope: 'openid profile email', audience: `https://${AUTH0_DOMAIN}/userinfo`, useBrowser: true})
      .then(credentials => {
        console.log(credentials)
        //Alert.alert('You tapped the button!');
            startDrawerManager();
      })
      .catch(error => alert(error));

      //startDrawerManager();

  }
  render() {
    return (
      <View style={styles.container}>

        
            <Image
            style={{width: 150, height: 150, resizeMode: 'contain', marginBottom: 20}}
            source={imageLogo}
            />
        
        <View style={styles.buttonContainer}>
            <Button
            title="login"
            onPress={() => this.loginWindow()}
            />
        </View>
        <View style={styles.buttonContainer}>
            <Button
            title="Skip"
            onPress={() => startDrawerManager()}
            />
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
    width: '80%'
  }
});

export default AuthScreen;