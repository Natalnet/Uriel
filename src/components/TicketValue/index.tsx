import React from 'react'
import { ViewProps } from 'react-native'

import {
  Container,
  KeyText,
  ValueText
} from './styles'

interface Props extends ViewProps {
  keyText: string
  valueText: string
}

export function TicketValue({ keyText, valueText, ...rest }: Props) {

  return (
    <Container {...rest} >
      <KeyText>{keyText}</KeyText>
      <ValueText>{valueText}</ValueText>
    </Container>
  )
}