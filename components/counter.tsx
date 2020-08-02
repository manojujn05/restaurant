import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <View>
            <Text>Counter:{counter}</Text>
            <Button
                title="Increase"
                onPress={() =>
                    {
                         setCounter(counter+1);
                    }    
                } />

            <Button
                title="Decrease"
                onPress={() =>
                    {
                        setCounter(counter-1);
                    }    
                } />
        </View>
    );
}

export default Counter;