import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, AsyncStorage } from 'react-native';
import { connect } from 'react-redux'
import imageLogo from '../../assets/CCNLogo.png'

import Icon from 'react-native-vector-icons/Ionicons'
import Platform from 'react-native'
import { NavigationActions } from '../../utility/NavigationActions'

import { authLogout } from '../../store/actions/index'


class SideDrawer extends Component {

    state = {
        userName: ''
    }
    
    constructor(props){
        super(props);
    }

    
    componentWillMount(){
        const name =  AsyncStorage.getItem("IM:auth:userFirstName");
            name.then((e)=>{
                this.setState({
                    userName: e
                })
            })
    }
    

    callScreenHandler = (name, title)=> {

        Promise.all([
            Icon.getImageSource(Platform.OS === 'android' ? "md-menu" : "ios-menu", 30)
        ]).then(sources => {

            //Delete all the stack navigation screens
            this.props.navigator.popToRoot({
                animated: false, // does the popToRoot have transition animation or does it happen immediately (optional)
            });

            //Close the drawer
            this.props.navigator.toggleDrawer({
                side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
                animated: true, // does the toggle have transition animation or does it happen immediately (optional)
                to: 'close' // optional, 'open' = open the drawer, 'closed' = close it, missing = the opposite of current state
            });

            //We need to call from another class. iOS does not like navigator push action calls from drawer
            NavigationActions.push({
                screen: "ilryapp."+name,
                title: title,
                navigatorButtons:{
                    leftButtons: [
                        {
                            icon: sources[0],
                            title: "Menu",
                            id: "sideDrawerToggle"
                        }
                    ]
                }
            });

        });
    }

    render() {
        return (
            
            <View 
                style={styles.container}>
                    {/* style={[styles.container, 
                    {width: Dimensions.get("window").width * 0.8}]}> */}

            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Image source={imageLogo} style={styles.imageLogo}/>
                    {/*<Text style={styles.headerText}>
                        {this.state.userName}
                    </Text>*/}
                </View>
            </View>
            <ScrollView>
                <TouchableOpacity onPress={() => this.callScreenHandler("NewsFeed", "")}>
                    <View style={styles.drawerItem}>
                        <Icon 
                            name="md-paper" 
                            size={40} 
                            color="black"
                            style={styles.drawerItemIcon}/>
                        <Text style={styles.titlesText}>General</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.callScreenHandler("NewsFeedBl", "")}>
                    <View style={styles.drawerItem}>
                        <Icon 
                            name="logo-bitcoin" 
                            size={40} 
                            color="black"
                            style={styles.drawerItemIcon}/>
                        <Text style={styles.titlesText}>Blockchain</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.callScreenHandler("NewsFeedEx", "")}>
                    <View style={styles.drawerItem}>
                        <Icon 
                            name="md-code-working"
                            size={40} 
                            color="black"
                            style={styles.drawerItemIcon}/>
                        <Text style={styles.titlesText}>Exchanges</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.callScreenHandler("NewsFeedGvr", "")}>
                    <View style={styles.drawerItem}>
                        <Icon 
                            name="md-globe" 
                            size={40} 
                            color="black"
                            style={styles.drawerItemIcon}/>
                        <Text style={styles.titlesText}>Government</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.callScreenHandler("NewsFeedAn", "")}>
                    <View style={styles.drawerItem}>
                        <Icon 
                            name="md-pulse" 
                            size={40} 
                            color="black"
                            style={styles.drawerItemIcon}/>
                        <Text style={styles.titlesText}>Analysis</Text>
                    </View>
                </TouchableOpacity>
                {/*<TouchableOpacity onPress={this.props.onLogout}>
                    <View style={styles.drawerItem}>
                        <Icon 
                            name="ios-log-out" 
                            size={40} 
                            color="black"
                            style={styles.drawerItemIcon}/>
                        <Text style={styles.titlesText}>Logout</Text>
                    </View>
                </TouchableOpacity>*/}
            </ScrollView>
            </View>
            
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    },
    header: {
        backgroundColor: "black",
        height: "30%",
    },
    headerContent: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        marginBottom: 10
    },
    imageLogo: {
        marginTop: 20,
        flex: 1,
        width: "100%",
        height: "100%",
        resizeMode: 'contain'
    },
    headerText: {
        flex: 0.3,
        color: "white",
        padding: 10,
        marginTop: 20
    },
    titlesText: {
        color: "black",
    },
    drawerItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 7
    },
    drawerItemIcon: {
        marginRight: 20,
        marginLeft: 10
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(authLogout())
    };
};
export default connect(null, mapDispatchToProps)(SideDrawer);