import React from 'react'

import { Container, Category, AddCategoryIcon } from './styles'

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de Texto</span>
        <AddCategoryIcon />
      </Category>

      {/* <ChannelButton channelName="Chat-livre" />
      <ChannelButton channelName="Trabalho" />
      <ChannelButton channelName="Estudos" />
      <ChannelButton channelName="Musicas" />
      <ChannelButton channelName="Vídeos" /> */}

    </Container>
  )
}

export default ChannelList