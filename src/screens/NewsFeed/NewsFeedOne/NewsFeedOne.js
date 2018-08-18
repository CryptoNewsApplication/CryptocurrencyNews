import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import InputContainer from '../../../components/InputContainer/InputContainer';
import { addPlace } from '../../../store/actions/index';

class NewsFeedOne extends Component {

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

    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
    }
    
    render () {
        return (
            <View>
                <InputContainer onPlaceAdded={this.placeAddedHandler}/>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    };
};

export default connect(null, mapDispatchToProps)(NewsFeedOne);