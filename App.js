// register screens and start app
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth'
import NewsFeed from './src/screens/NewsFeed/NewsFeed'
import NewsFeedOne from './src/screens/NewsFeed/NewsFeedOne/NewsFeedOne'
import NewsFeedTwo from './src/screens/NewsFeed/NewsFeedTwo/NewsFeedTwo'
import PlaceDetail from './src/screens/PlaceDetail/PlaceDetail'
import SideDrawer from './src/screens/SideDrawer/SideDrawer'

import configureStore from './src/store/configureStore';

const store = configureStore();

//Register screens
Navigation.registerComponent("ilryapp.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("ilryapp.NewsFeed", () => NewsFeed, store, Provider);

Navigation.registerComponent("ilryapp.NewsFeedOne", () => NewsFeedOne, store, Provider);
Navigation.registerComponent("ilryapp.NewsFeedTwo", () => NewsFeedTwo, store, Provider);
Navigation.registerComponent("ilryapp.PlaceDetail", () => PlaceDetail, store, Provider);

Navigation.registerComponent("ilryapp.SideDrawer", () => SideDrawer);

//Start a app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'ilryapp.AuthScreen', // unique ID registered with Navigation.registerScreen
    title: 'Login', // title of the screen as appears in the nav bar (optional)
    //navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    //navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
});