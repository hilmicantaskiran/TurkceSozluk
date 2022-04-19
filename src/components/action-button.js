import React from 'react'

import Button from './button'
import Text from '../components/text'

function ActionButton({ children, ...props }) {
    return (
        <Button 
            style={{
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.16,
                shadowRadius: 4,
                elevation: 5,
            }}
            minWith="actionButton" 
            height="actionButton" 
            borderRadius="full" 
            bg="white"
            px={8}
            {...props}
        >
            {children}
        </Button>
    )
}

export function ActionButtonTitle({ children, ...props }) {
    return (
        <Text ml={8} mr={8} fontWeight="bold" fontSize={13} {...props}>
            {children}
        </Text>
    )
}


export default ActionButton