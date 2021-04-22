import React from 'react'
import ChannelMessage, { Mention } from '../ChannelMessage'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
  return (
    <Container> 
      <Messages>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage 
            key={n}
            author='William Miranda'
            date='21/04/2021'
            content='Bem Vindo ao meu Canal!'
          />
        ))}



        <ChannelMessage 
          author='WMS'
          date='21/04/2021'
          content= {
            <>
              <Mention>@William Miranda</Mention>, Muito obrigado.
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData