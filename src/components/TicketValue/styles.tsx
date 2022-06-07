import { View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled(View)`
  flex-direction: column;
`
export const KeyText = styled.Text`
  color: ${props => props.theme.colors.shape};
  font-size: ${RFValue(12)}px;
  font-family: ${props => props.theme.fonts.medium};
  opacity: 0.6;

  margin-bottom: 6px;
`

export const ValueText = styled.Text`
  color: ${props => props.theme.colors.shape};
  font-size: ${RFValue(12)}px;
  font-family: ${props => props.theme.fonts.bold};
`