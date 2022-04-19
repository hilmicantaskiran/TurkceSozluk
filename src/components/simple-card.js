import React from 'react'

import Text from './text'
import Button from './button'

export function SimpleCardContainer({ children, ...props }) {
  return (
    <Button
      p={16}
      bg="white"
      borderRadius="normal"
      justifyContent="flex-start"
      {...props}
    >
      {children}
    </Button>
  )
}

export function SimpleCardTitle({ children, ...props }) {
  return (
    <Text fontSize={16} fontWeight="bold" color="black" {...props}>
      {children}
    </Text>
  )
}
