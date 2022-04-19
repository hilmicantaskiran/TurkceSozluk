import React from 'react'

import Box from './box'
import Text from './text'

function DetailSummaryItem({
  children,
  border,
  data,
  radiusTop,
  radiusBottom,
  ...props
}) {
  const type = data?.ozelliklerListe && data.ozelliklerListe.map((_) => _.tam_adi).join(', ') || 'isim'
  
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
      {border && (
        <Box
          position="absolute"
          right={12}
          left={12}
          top={0}
          height={1}
          bg="light"
        />
      )}

      { data ? (
        <Box>
          <Box flexDirection="row">
            <Text color="textLight" ml={-14} mr={6}>
              { data.anlam_sira }
            </Text>
            <Text color="red" fontStyle="italic">
              { type }
            </Text>
          </Box>
          <Box mt={8}>
            <Text color="black" fontWeight="600" {...props}>
              { data.anlam }
            </Text>
            { data.orneklerListe?.map((ornek) => (
              <Box key={ornek.ornek_id}>
                <Text color="textLight" fontWeight="500" ml={10} mt={12} {...props}>
                  { ornek.ornek }
                  <Text color="textLight" fontWeight="700" >
                    { ornek.yazar_id != '0' && ` - ${ornek.yazar[0].tam_adi}` }
                  </Text>
                </Text>
              </Box>
            )) }
          </Box>
        </Box>
      ) : (
        children
      )}
    </Box>
  )
}

export default DetailSummaryItem