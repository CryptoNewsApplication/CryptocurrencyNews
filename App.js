// register screens and start app
import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth'

//Register screens
Navigation.registerComponent("ilryapp.AuthScreen", () => AuthScreen);

//Start a app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'ilryapp.AuthScreen', // unique ID registered with Navigation.registerScreen
    title: 'Login', // title of the screen as appears in the nav bar (optional)
    //navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    //navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
});