import React from 'react'
import { ActivityIndicator } from 'react-native'

import Box from './box'
import Text from './text'
import { CardContainer, CardTitle, CardSummary } from './card'

import theme from '../utils/theme'

function SuggestionCard({ title, onPress, data, ...props }) {
    return (
        <Box {...props}>
            <Text color="textLight">{ title }</Text>
            <CardContainer mt={10} onPress={onPress}>
            { data ? (
                <>
                <CardTitle>{ data.madde }</CardTitle>
                <CardSummary>{ data.anlam }</CardSummary>
                </>
            ) : (
                <ActivityIndicator size="large" color={theme.colors.textLight} />
            )}
            </CardContainer>
        </Box>
    )
}

export default SuggestionCard