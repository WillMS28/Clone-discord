import React, { useRef, useEffect } from 'react'

import ChannelMessage, { Mention } from '../ChannelMessage'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
  const messageRef =useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messageRef.current

    if (div) {
      div.scrollTop = div.scrollHeight
    }
  })

  return (
    <Container> 
      <Messages ref={messageRef}>
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