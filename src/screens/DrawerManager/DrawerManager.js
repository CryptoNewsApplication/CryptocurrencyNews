import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Platform from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const startTabs = () => {

    /* The reason why it is good to use Promise.all is that Icon.getImageSource returns
    only a Promise. In this case we wait for it to load and we get the images inside sources.
    When the work is done and the images are loaded, we load also the tabs view. */

    Promise.all([
        Icon.getImageSource(Platform.OS === 'android' ? "md-book-outline" : "ios-book-outline", 30),
        Icon.getImageSource(Platform.OS === 'android' ? "md-menu" : "ios-menu", 30)
    ]).then(sources => {
        
      Navigation.startSingleScreenApp({ //startTabBasedApp
        screen: //[
          {
              screen: "ilryapp.NewsFeed",
              icon: sources[0],
              navigatorButtons:{
                    leftButtons: [
                        {
                            icon: sources[1],
                            title: "Menu",
                            id: "sideDrawerToggle"
                        }
                    ]
                }
          },
          
        drawer: {
            left: { // optional, define if you want a drawer from the left
                screen: 'ilryapp.SideDrawer', // unique ID registered with Navigation.registerScreen
                //In case we want to pass info to the drawer:
                passProps: {}, // simple serializable object that will pass as props to all top screens (optional),
                fixedWidth: Dimensions.get("window").width * 1.5
            },
        }
      });

     });

}

export default startTabs;