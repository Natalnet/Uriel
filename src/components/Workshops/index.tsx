import React, { useState } from 'react'
import { WorkCard } from '../WorkCard'

import {
  Container,
  Title
} from './styles'

interface Props {
  title: string
}

export function Workshops({ title }: Props) {
  const [loading, setLoading] = useState(true)

  return (
    <Container>

      <WorkCard
        data={{
          title: 'Layout responsivo utilizando ReactJS com Styled Components',
          speaker: {
            name: 'Pedro Henrique',
            avatar: 'https://github.com/pedroksty.png'
          },
          location: 'Sala 3'
        }}
      />

    </Container>
  )
}