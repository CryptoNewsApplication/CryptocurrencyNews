import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

import imageShare from '../../assets/share.png'

const newsList = props => {

    const newsOutput = props.news.map((oneNews, i) => (
        <ListItem 
            key={i} 
            newsTitle={oneNews}
            newsDescription={oneNews}
            newsSource={oneNews}
            onItemPressed={() => [props.onItemDeleted(i)]}/>
    ));

    return (
        <FlatList 
            style={styles.newsList}
            data={props.news}
            renderItem={(info) => (
                <ListItem 
                    newsTitle={info.item.title}
                    newsDescription={info.item.description}
                    newsSource={info.item.source.url}
                    firstImage={info.item.originalImageUrl}
                    onItemPressed={() => [props.onItemSelected(info.item.key)]}
                    onSharePressed={() => [props.onShareSelected(info.item.key)]}
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