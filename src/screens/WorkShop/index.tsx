import React from 'react'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { Text } from 'react-native'
import { Header } from '../../components/Header'


import {
  Container,
  Content,
  Title,
  Informations,
  Location,
  LocationsText,
  LocationText,
  LocationSub,
  Footer,
  Date,
  DatesText,
  DateText,
  DateSub,
  DescriptionText,
  Description,
  Speaker,
  SpeakersText,
  SpeakerText,
  SpeakerSub,
} from './styles'
import { useTheme } from 'styled-components'
import { Button } from '../../components/Button'


export function WorkShop() {
  const theme = useTheme()

  return (
    <Container>
      <Header title="Workshop" isToGoBack />

      <Content>
        <Title>Layout responsivo utilizando ReactJS com Styled Components</Title>

        <Informations>
          <Location>

            <Ionicons name="ios-location-outline" size={18} color={theme.colors.text} />

            <LocationsText>
              <LocationText>Sala 5</LocationText>
              <LocationSub>ECT/UFRN - Escola de Ciências e Tecnologia</LocationSub>
            </LocationsText>

          </Location>

          <Date>
            <Ionicons name="time-outline" size={18} color={theme.colors.text} />

            <DatesText>
              <DateText>Segunda-feira, 18 de junho de 2020</DateText>
              <DateSub>14h - 16h</DateSub>
            </DatesText>

          </Date>

          <Speaker>
            <Ionicons name="person-outline" size={18} color={theme.colors.text} />

            <SpeakersText>

              <SpeakerText>Pedro henrique</SpeakerText>

              <SpeakerSub>@pedroksty</SpeakerSub>

            </SpeakersText>

          </Speaker>

        </Informations>

        <DescriptionText>Descrição do workshop</DescriptionText>

        <Description>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </Description>



      </Content>

      <Footer>
        <Button onPress={() => { }} title="Garantir vaga" />
      </Footer>

    </Container>
  )
}