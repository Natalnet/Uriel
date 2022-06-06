import { useState } from 'react'
import { Text, useWindowDimensions } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Header } from '../../components/Header';

import { Workshops } from '../../components/Workshops'

import {
  Container
} from './styles'

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'white', }}
    style={{ backgroundColor: '#161621', }}
  />
);

export function Home() {
  const layout = useWindowDimensions()

  const [index, setIndex] = useState(0)

  const [routes] = useState([
    { key: 'first', title: "Sessão 1" },
    { key: 'second', title: 'Sessão 2' },
    { key: 'third', title: 'Sessão 3' },
  ])

  const renderScene = SceneMap({
    first: () => Workshops({ title: 'TITLE 1' }),
    second: () => Workshops({ title: 'TITLE 3' }),
    third: () => Workshops({ title: 'TITLE 4' }),
  })



  return (
    <Container>
      <Header title='Workshops' />

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width, }}
        renderTabBar={renderTabBar}
      />

    </Container>
  )
}

