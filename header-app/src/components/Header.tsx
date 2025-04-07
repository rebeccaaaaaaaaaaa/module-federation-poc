import { Box, Title } from '@mantine/core'
import React from 'react'

const Header = () => {
  return (
    <Box component="header" p="md" bg="#282c34" c="white">
      <Title order={2}>Microfrontend Header</Title>
    </Box>
  )
}

export default Header
