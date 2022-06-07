import React from 'react'
import { ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components'

import {
  Container, Title
} from './styles'

interface Props {
  title: string
  color?: string
  loading?: boolean
  onPress: () => void
}

export function Button({
  title,
  color,
  loading = false,
  ...rest
}: Props) {
  const theme = useTheme()

  return (
    <Container color={color} {...rest} >
      {loading ? <ActivityIndicator color={theme.colors.shape} size="small" /> : <Title>{title}</Title>}


    </Container>
  )
}