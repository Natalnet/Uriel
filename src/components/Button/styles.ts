import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface ButtonProps extends RectButtonProps {
  color: string
}

export const Container = styled(RectButton) <ButtonProps>`
  width: 100%;
  padding: ${RFValue(16)}px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  min-height: 64px;


  background-color: ${({ color, theme }) => color ? color : theme.colors.primary};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.shape};
`