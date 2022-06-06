import { RectButton } from 'react-native-gesture-handler'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled(RectButton)`
  width: 100%;
  padding: ${RFValue(8)}px;
  background-color: ${({ theme }) => theme.colors.button};
  flex-direction: column;
  border-radius: 10px;
  
`
export const Title = styled.Text`
  color: ${props => props.theme.colors.shape};
  font-size: ${RFValue(14)}px;
  font-family: ${props => props.theme.fonts.bold};
  margin-bottom: ${RFValue(12)}px;

`
export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`
export const Speaker = styled.View`
  flex-direction: row;
  align-items: center;
`
export const Avatar = styled.Image`
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
  border-radius: ${RFValue(12)}px;
  margin-right: ${RFValue(8)}px;
`
export const Name = styled.Text`
  color: ${props => props.theme.colors.text_primary};
  font-size: ${RFValue(12)}px;
  font-family: ${props => props.theme.fonts.medium};
`
export const Location = styled.View`
  flex-direction: row;
  align-items: center;
`

export const LocationText = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: ${RFValue(12)}px;
  font-family: ${props => props.theme.fonts.medium};
  margin-left: ${RFValue(4)}px;
`

