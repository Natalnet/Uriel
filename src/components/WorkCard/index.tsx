import React, { useCallback } from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import {
  Container,
  Title,
  Footer,
  Speaker,
  Avatar,
  Name,
  Location,
  LocationText,
} from './styles'
import { useTheme } from 'styled-components'
import { RectButtonProps } from 'react-native-gesture-handler'
import { useNavigation, useNavigationState } from '@react-navigation/native'

interface IWorkCard {
  title: string
  speaker: {
    name: string
    avatar: string
  }
  location: string
}

interface Props extends RectButtonProps {
  data: IWorkCard
  onPress: () => void
}

export function WorkCard({ data, onPress, ...rest }: Props) {
  const theme = useTheme()
  const navigation = useNavigation()

  const handleGoToWorkShopDetail = useCallback(() => {
    navigation.navigate('workshop')
  }, [])

  return (
    <Container onPress={handleGoToWorkShopDetail} {...rest} >
      <Title>{data.title}</Title>

      <Footer>
        <Speaker>
          <Avatar source={{ uri: data.speaker.avatar }} />
          <Name>{data.speaker.name}</Name>
        </Speaker>

        <Location>

          <MaterialIcons name="location-on" size={20} color={theme.colors.text} />

          <LocationText>{data.location}</LocationText>

        </Location>

      </Footer>


    </Container>
  )
}