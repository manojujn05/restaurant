import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const RecordsDetails = (results) => {
    
    return (
        <View>
        <Image style={styles.image} source={{ uri: results.results.thumb }} />    
        <Text style={styles.name}> {results.results.name} </Text>
        <Text >
            {results.results.user_rating.aggregate_rating} Ratings , {results.results.user_rating.votes} Reviews
        </Text>
        </View>
        );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 180,
        height: 100,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default RecordsDetails;
