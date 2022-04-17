import React from 'react';
import { View, Text, Button } from 'react-native';

function SearchView({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Ara</Text>
            <Button title="Detay" onPress={() => navigation.navigate('Detail')} />
        </View>
    );
}

export default SearchView;