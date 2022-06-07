import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};

  padding-top: ${getStatusBarHeight() + 16}px;
`

export const QRCodeWrapper = styled.View`
  padding: 16px;

`
export const Content = styled.View`
  width: 100%;

  border-radius: 12px;

  background-color: ${({ theme }) => theme.colors.secondary};
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`
export const TicketCut = styled.View`
  width: 100%;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.secondary};


  align-items: center;
  justify-content: center;
`
export const TicketCutBallRight = styled.View`
  height: 16px;
  width: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};

  position: absolute;
  right: -8px;
`

export const TicketCutBallLeft = styled.View`
  height: 16px;
  width: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};

  position: absolute;
  left: -8px;
`
export const TicketHeader = styled.View`
  width: 100%;
  padding: 16px;

  padding-bottom: 0;
`
export const Wrapper = styled.View`
  flex: 1;
  padding: 16px;
`
export const TicketContent = styled.View`
  padding: 16px;

  padding-top: 0px;
`