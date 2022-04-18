import React from 'react'

import Box from './box'
import Text from './text'
import Button from './button'

export function CardContainer({ children, ...props }) {
  return (
    <Button
      bg='white'
      borderRadius="normal"
      shadow='sm'
      px={12}
      py={16}
      {...props}
    >
      <Box flex={1} borderLeftWidth={4} borderLeftColor="light" pl={12}>
        {children}
      </Box>
    </Button>
  )
}

export function CardTitle({ children, ...props }) {
  return (
    <Text fontSize={18} fontWeight='bold' color="black" {...props}>
      { children }
    </Text>
  )
}

export function CardSummary({ children, ...props }) {
  return (
    <Text fontSize={13} mt={6} color="textMedium" {...props}>
      { children }
    </Text>
  )
}