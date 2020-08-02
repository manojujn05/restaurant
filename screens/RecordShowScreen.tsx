import React,  { useState, useEffect } from 'react'
import {Text, View, StyleSheet, Image} from 'react-native';
import yelp from './../navigation/api/yelp'
const RecordShowScreen = ( ) => {
    const [results, setResults] = useState(null);
    const  id = '16774318';//navigation.params;
   
    const searchApi = async (id) => {
        try{
        const response = await yelp.get(`/restaurant?res_id=${id}`);
       
        setResults(response.data);
        console.log(response);
        } catch( err){
          console.log(err);
          
        }
      }
      useEffect(() => {
        
        searchApi(id);
      }, []) ;
     
    return (
    <View style={styles.container}>  
    <Text  style={styles.name}>{ results.name }</Text>
    <Image style={styles.image} source={{ uri: results.photos_url }} />    
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

export default RecordShowScreen;