import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

const newsList = props => {

    const newsOutput = props.news.map((oneNews, i) => (
        <ListItem 
            key={i} 
            newsName={oneNews}
            newsDate={oneNews}
            onItemPressed={() => [props.onItemDeleted(i)]}/>
    ));

    return (
        <FlatList 
            style={styles.newsList}
            data={props.news}
            renderItem={(info) => (
                <ListItem 
                    newsName={info.item.name}
                    newsDate={info.item.pubdate}
                    //placeImage={info.item.image}
                    onItemPressed={() => [props.onItemSelected(info.item.key)]}
                />
            )}
        />   
    );
};

const styles = StyleSheet.create({
    newsList: {
      width: "100%"
    }
  });

export default newsList;