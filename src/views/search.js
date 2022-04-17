import React from 'react';
import { Text, Pressable } from 'react-native';

import BoxCenter from '../components/box-center';

function SearchView({navigation}) {
    return (
        <BoxCenter>
            <Pressable onPress={() => navigation.navigate('Detail')}>
                <Text style={{ color: 'black' }}>Detay</Text>
            </Pressable>
        </BoxCenter>
    );
}

export default SearchView;