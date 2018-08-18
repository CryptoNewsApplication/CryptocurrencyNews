import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../../components/PlaceList/Placelist'

class NewsFeedTwo extends Component {

//Constructor with props and onNavigator event are the listener needed to understand 
    //when the user clicks on a button on the nav bar
    constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        switch(event.type) {
            case 'NavBarButtonPress':
                if(event.id === "sideDrawerToggle"){
                    this.props.navigator.toggleDrawer({
                        side: "left"
                    });
                }
                break;
            default:
                break;
            
        }
    }

    itemSelectedHandler = key => {
        const selPlace = this.props.places.find(place =>{
            return place.key === key;
        });

        /* This push function is embedded in navigation react native library.
        It pushes a new screen on the stack and it opens a specific page. If we check the simulator,
        that page will automatically show an arrow to move backwards. */
        this.props.navigator.push({
            screen: "ilryapp.PlaceDetail",
            title: selPlace.name,
            passProps: {
                selectedPlace: selPlace
            }
        });
    }

    render () {
        return (
            <View>
                <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler}/>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        places: state.places.places
    };
};
export default connect(mapStateToProps)(NewsFeedTwo);