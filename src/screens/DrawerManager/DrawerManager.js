import React, { Component } from 'react';

import { Navigation } from 'react-native-navigation';

import Icon from 'react-native-vector-icons/Ionicons';



const startTabs = () => {

    /* The reason why it is good to use Promise.all is that Icon.getImageSource returns
    only a Promise. In this case we wait for it to load and we get the images inside sources.
    When the work is done and the images are loaded, we load also the tabs view. */

    Promise.all([
        Icon.getImageSource("ios-book-outline", 30),
        Icon.getImageSource("ios-menu", 30)
    ]).then(sources => { 
        
      Navigation.startTabBasedApp({
        tabs: [
          {
              screen: "ilryapp.NewsFeedOne",
              label: "Share Place",
              title: "Share Place",
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
          {
              screen: "ilryapp.NewsFeedTwo",
              label: "Find Place",
              title: "Find Place",
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
          }
        ],
        drawer: {
            left: { // optional, define if you want a drawer from the left
                screen: 'ilryapp.SideDrawer', // unique ID registered with Navigation.registerScreen
                //In case we want to pass info to the drawer:
                passProps: {}, // simple serializable object that will pass as props to all top screens (optional),
            },
        }
      });

     });

}

export default startTabs;