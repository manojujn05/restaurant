import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';
import yelp from './../navigation/api/yelp'
import RecordList from './RecordList'

 const TabOneScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState('');

  const searchApi = async () => {
    try{
    const response = await yelp.get('/search',
    {
      entity_id: '94741' ,
      entity_type: 'zone'
    });
   
    setResults(response.data.restaurants);
   
    } catch( err){
      console.log(err);
      
    }
  }
  useEffect(() => {
    console.log(results);
    searchApi();
  }, []) ;
  return (
    
    <View>
      <ColorCounter
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}
      />
      <Text> Search Screen</Text>
      <Text> We have found {results.length}</Text>
      <RecordList records={results}  />
    </View>

  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default TabOneScreen;