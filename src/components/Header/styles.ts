import styled from 'styled-components/native'
import Constants from 'expo-constants'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { AntDesign } from '@expo/vector-icons';


export const Container = styled.View`
  width: 100%;
  background-color: ${props => props.theme.colors.background};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  

`
export const Profile = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  z-index: 1;
`
export const BackButton = styled.TouchableOpacity`
  padding: 16px;
  position: absolute;
  z-index: 5;


`

export const Avatar = styled.Image`
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  margin-left: ${RFValue(8)}px;
  margin-right: ${RFValue(8)}px;

`
export const Icons = styled.View`
  justify-content: center;
  flex-direction: row;
`
export const Title = styled.Text`
  color: ${props => props.theme.colors.text_primary};
  font-size: ${RFValue(15)}px;
  font-family: ${props => props.theme.fonts.bold};
`