import React from 'react'

import Box from './box'
import Text from './text'

export function DetailSummaryItemContainer({ children, border, radiusTop, radiusBottom, ...props }) {
    return (
        <Box 
            position="relative" 
            bg="white" 
            px={28} 
            py={20} 
            borderTopLeftRadius={radiusTop ? 10 : 0} 
            borderTopRightRadius={radiusTop ? 10 : 0}
            borderBottomLeftRadius={radiusBottom ? 10 : 0} 
            borderBottomRightRadius={radiusBottom ? 10 : 0}
            {...props}
        >
            { border && 
                <Box 
                    position="absolute" 
                    right={12} 
                    left={12}
                    top={0}
                    height={1}
                    bg="light"
                />
            }
            <Box flexDirection="row">
                <Text color="textLight" ml={-14} mr={4}>1</Text>
                <Text color="red" fontStyle="italic">İSİM</Text>
            </Box>
            <Box mt={8}>
                {children}
            </Box>
        </Box>
    )
}

export function DetailSummaryItemTitle({ children, ...props }) {
    return (
        <Text color="black" fontWeight="600" {...props}>
            {children}
        </Text>
    )
}

export function DetailSummaryItemSummary({ children, ...props }) {
    return (
        <Text color="textLight" fontWeight="500" ml={10} mt={12} {...props}>
            {children}
        </Text>
    )
}