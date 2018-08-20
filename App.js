// register screens and start app
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth'

import NewsFeedBl from './src/screens/NewsFeed/NewsFeedBl'
import NewsFeedEx from './src/screens/NewsFeed/NewsFeedEx'
import NewsFeedGvr from './src/screens/NewsFeed/NewsFeedGvr'
import NewsFeedAn from './src/screens/NewsFeed/NewsFeedAn'
import NewsFeed from './src/screens/NewsFeed/NewsFeed'

import NewsDetail from './src/screens/NewsDetail/NewsDetail'
import SideDrawer from './src/screens/SideDrawer/SideDrawer'

import configureStore from './src/store/configureStore';

//TEMPORARY ======
import startDrawerManager from './src/screens/DrawerManager/DrawerManager'
Navigation.registerComponent("ilryapp.draw", () => startDrawerManager);
//TEMPORARY ======


const store = configureStore();

//Register screens
Navigation.registerComponent("ilryapp.AuthScreen", () => AuthScreen, store, Provider);

Navigation.registerComponent("ilryapp.NewsFeed", () => NewsFeed, store, Provider);
Navigation.registerComponent("ilryapp.NewsFeedBl", () => NewsFeedBl, store, Provider);
Navigation.registerComponent("ilryapp.NewsFeedEx", () => NewsFeedEx, store, Provider);
Navigation.registerComponent("ilryapp.NewsFeedGvr", () => NewsFeedGvr, store, Provider);
Navigation.registerComponent("ilryapp.NewsFeedAn", () => NewsFeedAn, store, Provider);

Navigation.registerComponent("ilryapp.NewsDetail", () => NewsDetail, store, Provider);

Navigation.registerComponent("ilryapp.SideDrawer", () => SideDrawer, store, Provider);

//Start app
export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: 'ilryapp.AuthScreen', // unique ID registered with Navigation.registerScreen
    title: 'Login', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {
      navBarHidden: true
    }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    //navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
});
