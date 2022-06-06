import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;



  background-color: #161621;

  padding-top: ${getStatusBarHeight() + 16}px;
`

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingVertical: 28
  },
  showsVerticalScrollIndicator: false

})`
  
`
export const Title = styled.Text`
  color: ${props => props.theme.colors.shape};
  font-size: ${RFValue(16)}px;
  font-family: ${props => props.theme.fonts.bold};
  margin-bottom: 22px;
`
export const Informations = styled.View`
  flex-direction: column;
  margin-bottom: 32px;
  
`
export const Location = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
  
  
`
export const LocationsText = styled.View`
  margin-left: 12px;
`
export const LocationText = styled.Text`
  color: ${props => props.theme.colors.shape};
  font-size: ${RFValue(14)}px;
  font-family: ${props => props.theme.fonts.medium};
  margin-bottom: 4px;
  
`
export const LocationSub = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: ${RFValue(12)}px;
  font-family: ${props => props.theme.fonts.regular};
`
export const Date = styled.View`
  flex-direction: row;
  margin-bottom: 16px;

  
`
export const DatesText = styled.View`
  margin-left: 12px;

`
export const DateText = styled.Text`
  color: ${props => props.theme.colors.shape};
  font-size: ${RFValue(14)}px;
  font-family: ${props => props.theme.fonts.medium};
  margin-bottom: 4px;
`

export const DateSub = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: ${RFValue(12)}px;
  font-family: ${props => props.theme.fonts.regular};
`

export const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.button};
  padding: 24px 24px ${getBottomSpace()}px;
`
export const DescriptionText = styled.Text`
  color: ${props => props.theme.colors.shape};
  font-size: ${RFValue(15)}px;
  font-family: ${props => props.theme.fonts.bold};
  margin-bottom: 8px;
`
export const Description = styled.Text`
  color: ${props => props.theme.colors.text_primary};
  font-size: ${RFValue(14)}px;
  font-family: ${props => props.theme.fonts.regular};
`
export const Speaker = styled.View`
  flex-direction: row;
`
export const SpeakersText = styled.View`
  margin-left: 12px;

`
export const SpeakerText = styled.Text`
  color: ${props => props.theme.colors.shape};
  font-size: ${RFValue(14)}px;
  font-family: ${props => props.theme.fonts.medium};
  margin-bottom: 4px;
`

export const SpeakerSub = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: ${RFValue(12)}px;
  font-family: ${props => props.theme.fonts.regular};
`

