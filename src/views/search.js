import React from 'react';
import { Text, Pressable } from 'react-native';

import Box from '../components/box';
import BoxCenter from '../components/box-center';

import { Bookmark } from '../components/icons';

function SearchView({navigation}) {
    return (
        <BoxCenter>
            <Pressable onPress={() => navigation.navigate('Detail')}>
                <Text style={{ color: 'black' }}>Detay</Text>
            </Pressable> 
            <Box bg='blue' size={20} mt={20} />
            <Bookmark stroke='black' width={32} height={32} />
        </BoxCenter>
    );
}

export default SearchView;