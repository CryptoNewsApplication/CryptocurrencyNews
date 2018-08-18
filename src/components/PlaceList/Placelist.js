import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

const placeList = props => {

    const placesOutput = props.places.map((place, i) => (
        <ListItem 
            key={i} 
            placeName={place} 
            onItemPressed={() => [props.onItemDeleted(i)]}/>
    ));

    return (
        <FlatList 
            style={styles.placeList}
            data={props.places}
            renderItem={(info) => (
                <ListItem 
                    placeName={info.item.name}
                    placeImage={info.item.image}
                    onItemPressed={() => [props.onItemSelected(info.item.key)]}
                />
            )}
        />   
    );
};

const styles = StyleSheet.create({
    placeList: {
      width: "100%"
    }
  });

export default placeList;