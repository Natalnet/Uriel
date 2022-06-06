import React from 'react'
import { AntDesign } from '@expo/vector-icons'

import logoUra from '../../assets/logo.png'

import {
  Container,
  Profile,
  Avatar,
  Icons,
  BackButton,
  Title,
} from './styles'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'

interface Props {
  isToGoBack?: boolean
  isLoading?: boolean
  title?: string
}

export function Header({ isToGoBack = false, title = "default", isLoading = false }: Props) {
  const theme = useTheme()

  const navigation = useNavigation()

  return (
    <Container>

      {isToGoBack && (
        <BackButton onPress={navigation.goBack} disabled={!isToGoBack} >

          <AntDesign name="arrowleft" size={26} color={theme.colors.shape} />

        </BackButton>
      )}

      <Profile >

        <Title>{title}</Title>



      </Profile>

    </Container>

  )
}