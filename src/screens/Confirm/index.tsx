import React, { useState } from 'react'
import { View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import { Header } from '../../components/Header'
import { TicketValue } from '../../components/TicketValue';

import {
  Container, Content, TicketContent, TicketCut, TicketCutBallLeft, TicketCutBallRight, TicketHeader, Title, Wrapper
} from './styles'

export function Confirm() {
  const [inputText, setInputText] = useState('');
  const [qrValue, setQrValue] = useState('');

  return (
    <Container>
      <Header isToGoBack title='Ticket' />

      <Wrapper>

        <Content>

          <TicketHeader>

            <TicketValue
              keyText='Workshop'
              valueText='Layout responsivo utilizando ReactJS com Styled Components'
            />

          </TicketHeader>


          <TicketCut>

            <TicketCutBallRight />

            <TicketCutBallLeft />

          </TicketCut>

          <TicketContent  >

            <TicketValue
              style={{ marginBottom: 18 }}
              keyText='Cliente'
              valueText='Pedro Henrique da Silva Martins'
            />

            <TicketValue
              keyText='Matrícula'
              valueText='20180041713'
            />


          </TicketContent>



        </Content>

      </Wrapper>




    </Container>
  )
}