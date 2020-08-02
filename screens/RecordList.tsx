import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import RecordsDetails from './RecordDetails';
import { useNavigation } from '@react-navigation/native';

import RecordShowScreen from '../screens/RecordShowScreen';
const RecordList = (records) => {
    const navigation = useNavigation();
    return (
        <View>
             <FlatList 
            horizontal
            data={records.records}
            keyExtractor={records => records.id}
            renderItem={({ item }) => {
                return (
                <TouchableOpacity 
                onPress={() => 
                navigation.navigate(RecordShowScreen, {
                     id: '123' }
                     )}
                     >
                    <RecordsDetails results={item.restaurant} />
                </TouchableOpacity>
                );
              
                   
            }}
            />
        </View>
    );

}

const styles= StyleSheet.create({});

export default RecordList;
