import React, {Component} from 'react';
import { View, StyleSheet, Animated, ActivityIndicator, Share } from 'react-native';

import { connect } from 'react-redux';

import { NavigationActions } from '../../utility/NavigationActions'

import NewsList from '../../components/NewsList/NewsList'
import { getNews } from '../../store/actions/index'


class NewsFeedGvr extends Component {

    state = {
        newsLoaded: false,
        //set up animations
        removeAnim: new Animated.Value(1),
        newsAnim: new Animated.Value(0)
    }

    componentDidMount() {
        this.props.onLoadNews();
    }

    //Constructor with props and onNavigator event are the listener needed to understand 
    //when the user clicks on a button on the nav bar
    constructor(props){
        super(props);
        NavigationActions.setNavigator(this.props.navigator)

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
        this.props.navigator.setStyle({
            navBarTextColor: 'white',
            navBarButtonColor: 'white',
            navBarBackgroundColor: 'black',
            //drawUnderNavBar: true,
            //navBarTranslucent: true,
            //navBarTransparent: true,
            //navBarBackgroundColor: 'transparent',
        });
    }

    newsLoadedHandler = () => {
        //start animation for the list
        Animated.timing(this.state.newsAnim,{
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start()  
    }
    newsSearchHandler = () => {
        //Starting animation, at the end switch newsLoaded to false
        Animated.timing(this.state.removeAnim,{
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start(() => {
            this.setState({
                newsLoaded: true
            });
            this.newsLoadedHandler();
        });  
    }

    itemSelectedHandler = key => {
        const selNews = this.props.governmentNews.find(oneNews =>{
            return oneNews.key === key;
        });

        /* This push function is embedded in navigation react native library.
        It pushes a new screen on the stack and it opens a specific page. If we check the simulator,
        that page will automatically show an arrow to move backwards. */

        this.props.navigator.push({
            screen: "ilryapp.NewsDetail",
            passProps: {
                selectedNews: selNews
            }
        });
    }

    itemShareHandler = key => {
        const selNews = this.props.governmentNews.find(oneNews =>{
            return oneNews.key === key;
        });

        Share.share({
            message: selNews.description,
            url: selNews.url,
            title: selNews.title
        }, {
            // Android only:
            dialogTitle: selNews.title
        })
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

    render () {
        let content = (
            <View>
                <NewsList 
                    news={this.props.governmentNews} 
                    onItemSelected={this.itemSelectedHandler}
                    onShareSelected={this.itemShareHandler}/>
            </View>
        );
        if(this.props.isLoading) {
            content = (
                <ActivityIndicator/>
            );
        }
        return (
            <View>
                {content}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    searchButton: {
        borderColor: "orange",
        borderWidth: 3,
        borderRadius: 50,
        padding: 20
    },
    searchButtonText: {
        color: "orange",
        fontWeight: "bold",
        fontSize: 26
    }
});
const mapStateToProps = state => {
    return {
        governmentNews: state.news.governmentNews,
        isLoading: state.ui.isLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadNews: () => dispatch(getNews())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedGvr);