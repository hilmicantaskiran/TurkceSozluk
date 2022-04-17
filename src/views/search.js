import React from 'react';
import { View, Text, Pressable } from 'react-native';

import Box from '../components/box';
import BoxCenter from '../components/box-center';

function SearchView({navigation}) {
    return (
        <BoxCenter>
            <Pressable onPress={() => navigation.navigate('Detail')}>
                <Text style={{ color: 'black' }}>Detay</Text>
            </Pressable> 
            <Box bg='blue' size={20} mt={20} />
        </BoxCenter>
    );
}

export default SearchView;